import { IonChip, IonIcon, IonLabel } from '@ionic/react';
import { add } from 'ionicons/icons';
import React, { useContext, useEffect, useState } from 'react';
import { ShoppinListContext } from '../../../../../context/shoppingList/ShoppingListProvider';
import { Item } from '../../../../../shared/models/interfaces';
import { shoppingListTypes } from '../../../../../shared/models/types';
import { useItem } from '../../../../../hooks/useItem';
import { removeDuplicatedElements } from '../../../../../shared/utils';

let defaultRecommendations = [
  'Huevos',
  'Leche',
  'Fairy',
  'Pan',
  'Chocolate',
  'Pollo',
  'Pescado',
  'Agua',
  'Cerveza',
  'Coca Cola',
  'Queso',
  'Embutido',
  'Detergente',
  'Pan Bimbo',
  'Pasta de dientes',
  'Gel de ducha',
  'Shampoo',
  'Atún',
  'Tomate frito',
  'Verduras',
  'Lentejas',
  'Macarrones',
  'Espaguetis',
  'Fruta',
  'Mantequilla',
  'Mermelada',
  'Yogures',
  'Mozzarella',
  'Pasta de dientes',
  'Legumbres',
  'Carne picada',
  'Salchichas',
  'Helado',
  'Lechuga',
  'Galletas',
];

const Recommendations: React.FC<{
  selectedSegment: string;
  showToast: (message: string, open: boolean) => void;
}> = ({ selectedSegment, showToast }) => {
  const { dispatchShoppingList, shoppingList } = useContext(ShoppinListContext);
  const { itemBuilder } = useItem();
  const itemsAdded = shoppingList.items.map((i) => i.name.toLowerCase());
  console.log('selectedSegment', selectedSegment);

  const [recommendations, setRecommendations] = useState(
    defaultRecommendations
  );

  const alreadyAddedFilter = (ele: string) =>
    !itemsAdded.includes(ele.toLocaleLowerCase());

  useEffect(() => {
    const recommendations =
      selectedSegment === 'timer'
        ? removeDuplicatedElements(
            shoppingList.recommendations?.reverse()?.filter(alreadyAddedFilter)
          ) || []
        : removeDuplicatedElements(defaultRecommendations.filter(alreadyAddedFilter));
    setRecommendations(recommendations);
  }, [selectedSegment]);

  const addRecomendation = (value: string) => {
    const index = recommendations.findIndex(
      (ele) => ele.toLowerCase() === value?.toLowerCase()
    );
    const item: Item = itemBuilder(value);
    dispatchShoppingList({ type: shoppingListTypes.addItem, payload: item });
    const message = `${recommendations[index]} ha sido añadido a la lista`;
    showToast(message, true);
    if (index >= 0) recommendations.splice(index, 1);
  };

  return (
    <>
      <div className="chip-container flex fd-row f-wrap w-100 mt-s">
        {recommendations.sort().map((ele, i) => (
          <div
            onClick={() => addRecomendation(ele)}
            key={i}
            className="mt-xs chip"
          >
            <IonChip id={'open-toast' + i} class="w-90 flex jc-sa">
              <IonLabel
              >{ele}</IonLabel>
            </IonChip>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recommendations;
