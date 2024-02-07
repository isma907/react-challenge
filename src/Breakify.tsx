import { useSelector } from "react-redux";
import { getFormVal } from "./store/selectors";
import { PeriodicForm } from "./store/reducer";

const Breakify = () => {
  const formData: PeriodicForm = useSelector(getFormVal);

  const periodicTable = [
    "H", // Hydrogen
    "He", // Helium
    "Li", // Lithium
    "Be", // Beryllium
    "B", // Boron
    "C", // Carbon
    "N", // Nitrogen
    "O", // Oxygen
    "F", // Fluorine
    "Ne", // Neon
    "Na", // Sodium
    "Mg", // Magnesium
    "Al", // Aluminum
    "Si", // Silicon
    "P", // Phosphorus
    "S", // Sulfur
    "Cl", // Chlorine
    "Ar", // Argon
    "K", // Potassium
    "Ca", // Calcium
    "Sc", // Scandium
    "Ti", // Titanium
    "V", // Vanadium
    "Cr", // Chromium
    "Mn", // Manganese
    "Fe", // Iron
    "Co", // Cobalt
    "Ni", // Nickel
    "Cu", // Copper
    "Zn", // Zinc
    "Ga", // Gallium
    "Ge", // Germanium
    "As", // Arsenic
    "Se", // Selenium
    "Br", // Bromine
    "Kr", // Krypton
    "Rb", // Rubidium
    "Sr", // Strontium
    "Y", // Yttrium
    "Zr", // Zirconium
    "Nb", // Niobium
    "Mo", // Molybdenum
    "Tc", // Technetium
    "Ru", // Ruthenium
    "Rh", // Rhodium
    "Pd", // Palladium
    "Ag", // Silver
    "Cd", // Cadmium
    "In", // Indium
    "Sn", // Tin
    "Sb", // Antimony
    "Te", // Tellurium
    "I", // Iodine
    "Xe", // Xenon
    "Cs", // Cesium
    "Ba", // Barium
    "La", // Lanthanum
    "Ce", // Cerium
    "Pr", // Praseodymium
    "Nd", // Neodymium
    "Pm", // Promethium
  ];

  const findFirstMatch = (name: string) => {
    let highlightedName = name;
    for (const element of periodicTable) {
      const index = highlightedName
        .toLowerCase()
        .indexOf(element.toLowerCase());
      if (index !== -1) {
        highlightedName =
          highlightedName.substring(0, index) +
          `<span class="title_highlight">${highlightedName.substring(
            index,
            index + element.length
          )}</span>` +
          highlightedName.substring(index + element.length);
        break;
      }
    }
    return highlightedName;
  };

  const highlightedFirstname = findFirstMatch(formData.firstname);
  const highlightedLastname = findFirstMatch(formData.lastname);

  return (
    <div className="breakify_name">
      <h1>
        <span dangerouslySetInnerHTML={{ __html: highlightedFirstname }} />
      </h1>
      <h1>
        <span dangerouslySetInnerHTML={{ __html: highlightedLastname }} />
      </h1>
    </div>
  );
};

export default Breakify;
