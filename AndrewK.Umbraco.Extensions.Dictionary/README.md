# AndrewK.Umbraco.Dictionary

AndrewK.Umbraco.Dictionary is a custom property editor for Umbraco 16 that allows content editors to store and manage multiple key-value pairs in a structured way.  
It provides an intuitive user interface for adding, editing, and removing dictionary-style data directly within the Umbraco backoffice.

---

## Features

- **Key-Value Pair Management:** Add, edit, and remove key-value pairs with an intuitive UI.
- **Configurable Limits:** Set minimum and maximum number of entries through property editor configuration.
- **Drag & Drop Reordering:** Reorder dictionary items using drag handles.
- **Validation Support:** Built-in validation for required keys and proper form handling.
- **Type-Safe Access:** Strong-typed property value converter returns `ICollection<KeyValuePair<string, string>>`.
- **Umbraco 16 Compatible:** Built specifically for Umbraco 16 using modern Lit elements and TypeScript.

---

## Installation

You can install the package via NuGet:

---

## Usage

### Creating a Dictionary Property

1. **Create a new Data Type** in the Umbraco backoffice
2. **Select "AndrewK Dictionary"** as the property editor
3. **Configure minimum and maximum** number of entries (optional)
4. **Add the data type** to your document type

### Configuration Options

- **Minimum:** Enter the minimum number of key-value pairs to be displayed
- **Maximum:** Enter the maximum number of key-value pairs to be displayed (enter 0 for unlimited)

### Accessing Dictionary Data in Controllers/Services/Templates

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        var content = // ... get your content
        var dictionary = content.Value<ICollection<KeyValuePair<string, string>>>("myDictionaryProperty");
        
        foreach (var kvp in dictionary ?? [])
        {
            var key = kvp.Key;
            var value = kvp.Value;
            // Process your key-value pairs
        }
        
        return View();
    }
}
```

### Example Of Setting Dictionary Data in Controllers/Services

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        var collectionOfKeys = // ... your collection, serializable to list of key-value pairs
        
        // needed to serialize property names (e.g., 'key' or 'value') in a way the converter can deserialize them
        var settings = new JsonSerializerSettings
        {
            ContractResolver = new CamelCasePropertyNamesContractResolver()
        };
        
        // set serialized object
        content.SetValue(PropertyAlias, JsonConvert.SerializeObject(values, settings));
        
        return View();
    }
}
```