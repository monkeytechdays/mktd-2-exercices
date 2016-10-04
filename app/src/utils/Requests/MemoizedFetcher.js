import React from 'react'
import Fetcher from './Fetcher'
import StoreData from '../Storage/StoreData'
import GetStoredData from '../Storage/GetStoredData'

/**
 * Ce composant permet de récupérer le résultat d'une requête dans un localStorage s'il existe déjà
 * afin d'éviter d'avoir à refaire plusieurs fois la même requête.
 * C'est typiquement un cas qui montre l'intérêt de la composabilité de React.
 *
 * @param propsToRequest   cf. src/utils/Fetcher.js
 * @param addResultToProps cf. src/utils/Fetcher.js
 * @param storageKey       string
 *                         La clé à laquelle les données seront stockées dans le localStorage du
 *                         navigateur
 * @param propsToStorage   (object: props) -> mixed
 *                         Prend en paramètre les propriétés du composant après le addResultToProps
 *                         Renvoie les propriétés la donnée à stocker. Celle-ci sera passée dans
 *                         JSON.stringify.
 * @param [checkResult]    (object: props) -> (mixed: data) -> bool
 *                         Prend en paramètre les propriétés du composant passées en amont
 *                         Les données qui viennent du localStorage
 *                         Renvoie si oui ou non c'est les données que l'on s'attendait à avoir. Si
 *                         ce n'est pas le cas, le fetcher sera utilisé.
 */
export default ({propsToRequest, addResultToProps, storageKey, propsToStorage, checkResult}) => (BaseComponent) => {
  const FetcherComponent = Fetcher({ propsToRequest, addResultToProps })(
    StoreData({ storageKey, propsToStorage })(
      BaseComponent
    )
  )

  const RenderedComponent = ({ __data, ...props }) => {
    if (__data) {
      return <BaseComponent {...addResultToProps(props)({data: __data, loading: false})} />
    } else {
      return <FetcherComponent {...props} />
    }
  }

  return GetStoredData({
    storageKey,
    checkResult,
    storageToProps: (props) => (data) => ({ ...props, __data: data }),
  })(RenderedComponent)
}
