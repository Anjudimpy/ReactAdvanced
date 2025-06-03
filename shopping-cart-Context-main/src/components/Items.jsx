import data from "../data/itemData";
import styles from "../styles/Item.module.css";
import ItemCard from "./ItemCard";

function Items() {
  return (
    <div className={styles.wrapper}>
      {data.map((itemData)=>(
        <ItemCard 
        key={itemData.id}
        id={itemData.id}
        name={itemData.name}
        price={itemData.price}
        />
      ))
    }
      
    </div>
  );
}

export default Items;
