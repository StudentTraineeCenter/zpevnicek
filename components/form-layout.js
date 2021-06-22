import Layout from "./layout";

export default function FormLayout() {
    return (
        <div>
            <h2 className="text-3xl mb-3 leading-snug">Základní informace</h2>
            <div>
                <label>Název písně</label>
                <input for="grid-first-name" type="text" id="fname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
            <div>
                <label>Url adresa písně</label>
                <input for="grid-first-name" type="text" id="fslug" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
            <div>
                <label>Autor, skladatel, skupina</label>
                <input for="grid-first-name" type="text" id="fauthor" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
            <div>
                <label>Poznámka</label>
                <input for="grid-first-name" type="text" id="fnote" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
            </div>
            <h2 className="text-3xl mb-3 leading-snug">Text písně s akordy</h2>
            <div>
                <label>Text písně musí vždy obsahovat akordy, které jsou v hranatých závorkách</label>
                <input type="text" id="ftext" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y border rounded-md"></input>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">stáhnout json</button>
        </div>
    )
}