import { Header } from "../components";
import {
  Edit,
  Filter,
  GridComponent,
  Page,
  Sort,
  Toolbar,
} from "@syncfusion/ej2-react-grids";
import { customersData, customersGrid } from "../data/dummy";
import {
  ColumnDirective,
  ColumnsDirective,
  Inject,
} from "@syncfusion/ej2-react-charts";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Filter, Sort]} />
      </GridComponent>
    </div>
  );
};

export default Customers;
