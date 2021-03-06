import { connect } from 'dva';
import {
    Table,
    Row, Col,
    Button,
    Icon,
    Card,
} from 'antd';
import moment from 'moment';
const mapStateToProps = ({ orders, loading }) => ({
    tableData: orders.tableData,
    loading: loading.models["orders"],
    sort: orders.sort,
    filter: orders.filter,
})
const mapDispatchToProps = (dispatch) => ({
    getTableData: () => dispatch({
        type: 'orders/setTableData_e'
    }),
    setSort: (sort) => dispatch({
        type: 'orders/setSort_r',
        payload: sort,
    }),
    setFilter: (filter) => dispatch({
        type: 'orders/setFilter_e',
        payload: filter
    }),
})
@connect(mapStateToProps, mapDispatchToProps)
export default class OrdersTable extends React.Component {
    componentDidMount() {
        const { getTableData } = this.props;
        getTableData();
    }
    render() {
        const { tableData, loading, sort, filter, setSort, getTableData, setFilter } = this.props;
        const paymentStatus_SelectValues = ["Authorized", "Paid", "Pending", "Partially_paid", "Refunded", "Voided", "Partially_refunded", "Unpaid"];
        const paymentStatus_SelectOptions = paymentStatus_SelectValues.map((item) => ({ text: item, value: item.toLowerCase() }));

        const fulfillmentStatus_SelectValues = ["Shipped", "Partial", "Unshipped", "Unfulfilled"];
        const fulfillmentStatus_SelectOptions = fulfillmentStatus_SelectValues.map((item) => ({ text: item, value: item.toLowerCase() }));

        let datesort = false;
        if (sort.order === 'created_at') {
            if (sort.sort === 'asc') {
                datesort = 'ascend';
            } else {
                datesort = 'descend';
            }
        }

        // let fulfillmentStatus_filtered = false;
        // console.log(filter.fulfillment_status)
        // if (filter.fulfillment_status.length !== 0) {
        //     fulfillmentStatus_filtered = true;
        // }
        const columns = [
            {
                title: 'Order',
                dataIndex: 'name',
                key: 'name',
                render: (name, record) => (<Button type="link" size="small" onClick={() => { location.hash = "/orders/all_orders/order_details" }}>{name}</Button>)
            },
            {
                title: 'Date',
                dataIndex: 'created_at',
                key: 'created_at',
                sorter: true,
                sortOrder: datesort,
                render: created_at => (moment(created_at).format("YYYY-MM-DD HH:mm:ss")),
            },
            {
                title: 'Customer',
                dataIndex: 'customer',
                key: 'customer',
                render: customer => (customer ? customer.first_name + " " + customer.last_name : "没有客户"),
            },
            {
                title: 'Payment',
                dataIndex: 'financial_status',
                key: 'financial_status',
                filters: paymentStatus_SelectOptions,
                filteredValue: filter.financial_status,
            },
            {
                title: 'Fulfillment',
                dataIndex: 'fulfillment_status',
                key: 'fulfillment_status',
                filters: fulfillmentStatus_SelectOptions,
                filteredValue: filter.fulfillment_status,
                render: fulfillment_status => {
                    if (fulfillment_status === null) {
                        return 'Unfulfilled'
                    }
                    else {
                        return fulfillment_status
                    }
                },
            },
            {
                title: 'Total',
                dataIndex: 'total_line_items_price',
                key: 'total_line_items_price',
                render: total_line_items_price => ('$' + total_line_items_price)
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                // console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                // disabled: record.customer.first_name === '', // Column configuration not to be checked
            }),
        };
        return (
            <>
                <Row type="flex" justify="end" style={{ marginBottom: 16 }}>
                    <Col span={3} style={{ marginRight: 24 }}>
                        <Button
                            type="primary"
                            block
                            onClick={
                                () => {
                                    location.hash = "/orders/draft_orders/new"
                                }
                            }
                        >
                            New order <Icon type="plus"></Icon>
                        </Button>
                    </Col>
                </Row>
                <Table
                    columns={columns}
                    dataSource={tableData}
                    rowSelection={rowSelection}
                    rowKey={record => record.id}
                    pagination={false}
                    loading={loading}
                    onChange={
                        (pagination, filters, sorter) => {
                            console.log(filters, sorter)
                            if (sorter) {
                                let closeSort = { order: '', sort: '' };
                                if (sorter.order) {
                                    closeSort = { order: sorter.field, sort: '' };
                                }
                                if (sorter.order === "ascend") {
                                    closeSort.sort = 'asc';
                                } else if (sorter.order === "descend") {
                                    closeSort.sort = 'desc';
                                }
                                setSort(closeSort);
                            }
                            setFilter({ name: 'financial_status', value: filters.financial_status });
                            setFilter({ name: 'fulfillment_status', value: filters.fulfillment_status });
                            getTableData();
                        }
                    }
                />
            </>
        );
    }
}
