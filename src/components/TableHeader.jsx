import { memo } from "react"

export const TableHeader = memo(() => {
    return (
        <thead>
          <tr>
            <th>№ титула</th>
            <th style={{width: "8%"}}>Район</th>
            <th style={{width: "45%"}}>Имя титула</th>
            <th><input type="text" placeholder="Год ввода" /></th>
            <th>Всего розеток</th>
            <th>Занято розеток</th>
            <th>Byfly</th>
            <th>Zala</th>
            <th>Byfly_Zala</th>
            <th>Пакеты</th>
            <th>Голая телефония</th>
            <th>VPN</th>
          </tr>
        </thead>
    )
});