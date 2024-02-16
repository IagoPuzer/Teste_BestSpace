import { CustomSelect } from "./CustomSelect";
import { useState } from "react";

export function Form() {
  const [selectedOption1, setSelectedOption1] = useState("");

  const options1 = [
    { value: "casa1", label: "Casa 1" },
    { value: "casa2", label: "Casa 2" },
    { value: "casa3", label: "Casa 3" },
  ];

  const [selectedOption2, setSelectedOption2] = useState("");

  const options2 = [
    { value: "casa1", label: "Casa 1" },
    { value: "casa2", label: "Casa 2" },
    { value: "casa3", label: "Casa 3" },
  ];

  const [selectedOption3, setSelectedOption3] = useState("");

  const options3 = [
    { value: "casa1", label: "Casa 1" },
    { value: "casa2", label: "Casa 2" },
    { value: "casa3", label: "Casa 3" },
  ];

  return (
    <div className="mt-8 lg:grid lg:grid-cols-2 p-10">
      <form className="flex-1 flex flex-col lg:px-20">
        <div className="flex flex-1 flex-col gap-3 p-5 bg-gray-100 rounded-md">
          <label htmlFor="note" className="text-sm font-medium text-slate-500">
            Adicione um texto:
          </label>

          <textarea
            id="note"
            autoFocus
            className="text-sm leading-6 text-slate-400 resize-none flex-1 outline-none bg-white p-3 rounded-md"
          />
        </div>
        <div className="container mx-auto mt-4">
          <h1 className="text-2xl font-bold mb-4">Selects</h1>
          <div className="grid grid-cols-2 gap-2">
            <CustomSelect
              options={options1}
              onChange={setSelectedOption1}
              value={selectedOption1}
            />
            <CustomSelect
              options={options2}
              onChange={setSelectedOption2}
              value={selectedOption2}
            />
            <CustomSelect
              options={options3}
              onChange={setSelectedOption3}
              value={selectedOption3}
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500 rounded-md mt-3"
        >
          Enviar para o console
        </button>
      </form>
    </div>
  );
}
