import { Header } from "../components";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";

// @ts-expect-error:"Parameter 'args' implicitly has an 'any' type."
const change = (args) => {
  // @ts-expect-error:"Object is possibly 'null'"
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};
const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold dark:text-gray-200 mt-2 mb-4">
              Inline Palette
            </p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold dark:text-gray-200 mt-2 mb-4">
              Inline Picker
            </p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
