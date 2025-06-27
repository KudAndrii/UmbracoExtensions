# AndrewK.Umbraco.Dropdown

AndrewK.Umbraco.Dropdown is a custom property editor for Umbraco 16 that enhances the default dropdown functionality with advanced features and improved user experience. It provides a flexible and intuitive dropdown interface for selecting single or multiple values within the Umbraco backoffice.

---

## Features

- **Single or Multiple Selection:** Configure as a single-select dropdown or a multi-select list.
- **Default Value Support:** Set default values for new content items.
- **Legacy Value Handling:** Gracefully handles values that no longer exist in the options list.
- **Validation Support:** Provides visual feedback for invalid selections.
- **Responsive UI:** Modern interface built with Lit elements.
- **Type-Safe Access:** Returns string for single selection or IEnumerable<string> for multiple selections.
- **Umbraco 16 Compatible:** Built specifically for Umbraco 16 using modern web standards.

---

## Installation

You can install the package via NuGet:

```bash
  dotnet add package AndrewK.Umbraco.Dropdown
```

---

## Usage

### Creating a Dropdown Property

1. **Create a new Data Type** in the Umbraco backoffice
2. **Select "AndrewK Dropdown"** as the property editor
3. **Configure options and selection mode**
4. **Add the data type** to your document type

### Configuration Options

- **Items:** Define the dropdown options as key-value pairs
- **Multiple:** Toggle between single and multiple selection modes
- **Default:** Set a default value for new content items

### Accessing Dropdown Data in Controllers/Services/Templates

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        var content = // ... get your content

        // For single selection
        var singleValue = content.Value<string>("mySingleDropdownProperty");

        // For multiple selection
        var multipleValues = content.Value<ICollection<string>>("myMultiDropdownProperty");

        foreach (var value in multipleValues ?? Enumerable.Empty<string>())
        {
            // Process your values
        }

        return View();
    }
}
```

### Example Of Setting Dropdown Data in Controllers/Services

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        var collection = // ... your collection, serializable to a list of strings
        
        // set serialized object
        content.SetValue(PropertyAlias, JsonConvert.SerializeObject(collection));
        
        return View();
    }
}
```