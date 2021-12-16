import { useEffect, useState } from 'react';
import { delay } from '../utils/delay';
import preloaderSrc from '../img/preloader.gif';
import { TableCreater, TableHeader } from '../components/index';


export const Loev = () => {
  let [titulData, setTitulData] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        delay(2000);
        fetch("http://localhost:4000/api/titulinfo/loev")
        .then((res) => {
            if(res.status >=400 && res.status < 600) {
                throw new Error('Failed fetching data')
            }
            return res.json();
        })
        .then((data) => setTitulData(data))
        .finally(() => setIsLoading(false))
    },[])

    return (
      <table className='table table-striped'>
        <TableHeader/>
        <tbody>
          { !isLoading ?  titulData.map(({...titulInfo}) => (
                          <TableCreater {...titulInfo}/>
          )): <img src={preloaderSrc} alt="preloader" style={{position:'relative', top:"50vh", left:"70vh"}}/>}         
        </tbody>
      </table>
    );
}