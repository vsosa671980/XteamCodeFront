import GeneralTablesComponent from '@/components/GeneralTables/GeneralTablesComponent'
import React from 'react'

export default class GenerateTable {
 
     static create = (data:[],buttons:[],tableName:any) => {
        return (
          <GeneralTablesComponent data={data} buttons={buttons} tableName={tableName} />
        )
      }
 }

