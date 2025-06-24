# AndrewK.Umbraco.CheckBoxList

A custom CheckBoxList property editor for Umbraco that provides enhanced functionality for dealing with keys on the backend and labels in the backoffice.

## Features

- Multiple item selection support
- Integration with AndrewK.Umbraco.Dictionary for options management
- Default value specification
- Server-side value conversion to `ICollection<string>`
- Full validation support
- Seamless integration with Umbraco backoffice

## Installation

You can install the package via NuGet:

```bash
  dotnet add package AndrewK.Umbraco.CheckBoxList
```

## Usage

### Creating a Dropdown Property

1. **Create a new Data Type** in the Umbraco backoffice
2. **Select "AndrewK CheckBoxList"** as the property editor
3. **Configure options (and default value if needed)**
4. **Add the data type** to your document type

### Configuration Options

- **Items:** Define the checkbox-list options as key-value pairs
- **Default:** Set a default value for new content items

### Accessing CheckBoxList Data in Controllers/Services/Templates

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        var content = // ... get your content

        var values = content.Value<ICollection<string>>("myCheckBoxListProperty");

        foreach (var value in values)
        {
            // Process your values
        }

        return View();
    }
}
```

### Example Of Setting CheckBoxList Data in Controllers/Services

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