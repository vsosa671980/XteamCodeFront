import GeneralTablesComponent from "../user/GenerateTablesComponent"
import React, { useEffect } from 'react'




interface GenerateTableProps {
  data: any[];
  buttons: any[];
  tableName: any;
  totalPages: number;
  getPageRequestedFromPagination: (page: number) => void;
}

const GenerateTable: React.FC<GenerateTableProps> = ({ data, buttons, tableName, totalPages, getPageRequestedFromPagination }) => {  //Object router
  useEffect(() => {

  }, [data]); 

  return (
    <GeneralTablesComponent
      data={data}
      buttons={buttons}
      tableName={tableName}
      lastPage={totalPages}
      getPage={getPageRequestedFromPagination}
      totalPages ={totalPages} 
    />
  );
};

export default GenerateTable;