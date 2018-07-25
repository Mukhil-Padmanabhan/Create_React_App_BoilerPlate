import React, { Component } from 'react';
import CreatePatientContainer from "../../containers/create-patient/create-patient-container";
import * as createPatientActions  from './actions'
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
export default class CreatePatient extends React.Component {
  constructor(props) {
		super(props);

	}
render() {
    return (
        <CreatePatientContainer/>
    )
}
}

function mapStateToProps(store) {
    return {
        products: store.searchEnconterReducer.products,
        total: store.searchEnconterReducer.total,
        keyValues: store.searchEnconterReducer.keyValues,
        customFilterBox: store.searchEnconterReducer.customFilterBox,
        displayProducts: store.searchEnconterReducer.displayProducts,
        pdfColumn: store.searchEnconterReducer.pdfColumn,
        filteredKeys: store.searchEnconterReducer.filteredKeys,
        columnDropDown: store.searchEnconterReducer.columnDropDown,
        modalIsOpen: store.searchEnconterReducer.modalIsOpen,
        toDisplay: store.searchEnconterReducer.toDisplay,
        swapValues: store.searchEnconterReducer.swapValues,
        filter_1: store.searchEnconterReducer.filter_1,
        filter_2: store.searchEnconterReducer.filter_2,
        subFilter_2: store.searchEnconterReducer.subFilter_2,
        lastIndex: store.searchEnconterReducer.lastIndex,
        filteredProducts: store.searchEnconterReducer.filteredProducts,
        valuesRemovedInBulk: store.searchEnconterReducer.valuesRemovedInBulk,
        filterInfoDisplay: store.searchEnconterReducer.filterInfoDisplay,
        openFilterBox: store.searchEnconterReducer.openFilterBox,
        flag: store.searchEnconterReducer.flag,
        commaSearch: store.searchEnconterReducer.commaSearch,
        customSearchProducts: store.searchEnconterReducer.customSearchProducts,
        auth: store.searchEnconterReducer.auth,
        processCriteria: store.searchEnconterReducer.processCriteria,
        favouriteModal: store.searchEnconterReducer.favouriteModal,
        fromDate: store.searchEnconterReducer.fromDate,
        toDate: store.searchEnconterReducer.toDate,
        selectList : store.searchEnconterReducer.selectList
    };
}




function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(createPatientActions, dispatch)
    };
}
