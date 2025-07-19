# AndrewK.Umbraco.RadioButtonList

A custom RadioButtonList property editor for Umbraco that provides enhanced functionality for dealing with keys on the backend and labels in the backoffice.

## Features

- Integration with AndrewK.Umbraco.Dictionary for options management
- Default value specification
- Full validation support
- Seamless integration with Umbraco backoffice
- Labels localization via backoffice localization files

## Installation

You can install the package via NuGet:

```bash
  dotnet add package AndrewK.Umbraco.RadioButtonList
```

## Usage

### Creating a RadioButtonList Property

1. **Create a new Data Type** in the Umbraco backoffice
2. **Select "AndrewK RadioButtonList"** as the property editor
3. **Configure options (and default value if needed)**
4. **Add the data type** to your document type

### Configuration Options

- **Items:** Define the radio-button-list options as key-value pairs
- **Default:** Set a default value for new content items

### Accessing CheckBoxList Data in Controllers/Services/Templates

```csharp
public class MyController : Controller
{
    public IActionResult Index()
    {
        IPublishedContent content = // ... get your content

        var values = content.Value<string>("myRadioButtonListProperty");

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
        IContent content = // ... get your content

        content.SetValue(PropertyAlias, "myOptionKey");
        
        return View();
    }
}
```

### Using backoffice localization files

#### Let's say your localization file looks like the following

```js
export default {
    dataLabels: {
        one: 'One EN',
        two: 'Two EN'
    }
}
```

#### In this case here's what your configuration should look like

```json
[
  {
    "alias": "items",
    "value": [
      {
        "key": "1",
        "value": "#dataLabels_one" // "#{section}_{key}"
      },
      {
        "key": "2",
        "value": "#dataLabels_two" // "#{section}_{key}"
      }
    ]
  }
]
```