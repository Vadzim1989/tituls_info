import { useEffect, useState } from 'react';
import { delay } from '../utils/delay';
import preloaderSrc from '../img/preloader.gif';
import { TableCreater, TableHeader } from '../components/index';


const titulData = [
    {
        id_adr: 10,
        god_vvod: 2020,
        zues: "Gomel",
        name: 'titul1',
        all_socket: 50,
        check_socket: 50,
        byfly_pon: 10,
        zala_pon: 10,
        byfly_zala_pon: 10,
        packet_pon: 20,
        phone_null_pon: 0,
        vpn: 0
    },
    {
        id_adr: 14,
        god_vvod: 2018,
        zues: "Vetka",
        name: 'titul2',
        all_socket: 50,
        check_socket: 50,
        byfly_pon: 10,
        zala_pon: 10,
        byfly_zala_pon: 10,
        packet_pon: 20,
        phone_null_pon: 0,
        vpn: 0
    }
]


export const Test = () => {
    return (
      <table className='table table-striped'>
        <TableHeader/>
        <tbody>
          {titulData.map(({...titulInfo}) => (
                          <TableCreater {...titulInfo}/>
          ))}    
        </tbody>
      </table>
    );
}