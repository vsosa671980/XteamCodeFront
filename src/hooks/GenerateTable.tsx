import GeneralTablesComponent from '@/components/GeneralTables/GeneralTablesComponent'
import React from 'react'



interface ButtonItem {
  active: string;
  inactive: string;
}

export default class GenerateTable {

 
     static create = (data:[],buttons:[],tableName:any) => {
        return (
          <GeneralTablesComponent data={data} buttons={buttons} tableName={tableName} />
        )
      }
 }

