import React, { Component } from 'react';
import {Form, Grid, Row , Col , Clearfix ,FieldGroup ,Checkbox , Radio, ControlLabel ,Button ,FormGroup,FormControl,ButtonToolbar,MenuItem,DropdownButton } from 'react-bootstrap'
import moment from 'moment';
import DatePicker from 'react-date-picker';
import initialState from '../../components/create-patient/initial.state';

export default class CreatePatientContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }

    componentWillMount() {
        console.log('this.props', this.props)
    }
    handleDateChange(prop, date) {
        var { handleDateSelections } = this.props;
        let dates =  date ;
        handleDateSelections(dates, prop)
    }
    handleDropdownChange(prop, zone ,value) {
        var { handleSelectChange } = this.props;
        handleSelectChange(zone, prop, value)
    }
    handleRadioChange(prop, value) {
        var { handleRadioChange } = this.props;
        handleRadioChange(prop, value)
    }
    handleSubmit(prop, value) {
        var { handleSubmit } = this.props;
        handleSubmit(prop, value)
    }
    handleCheckbox(prop, value) {
        var { handleCheckboxChange } = this.props;
        handleCheckboxChange(prop, value)
    }

    render() {
        const cityList = [{id :1, name :"New York"},
            {id :2, name :"Los Angeles"},
            {id :2, name :"Chicago"},
            {id :4, name :"Houston"},{id :1, name :"Phoenix"},
            {id :5, name : "Philadelphia",},
            {id :6, name :"San Antonio."},
            {id :7, name :"San Diego"},
            {id :8, name :"New York"},

        ]
        const stateList = [
            {id :2, name :"Alabama"},
            {id :2, name :"Alaska"},
            {id :2, name :"American Samoa"},

        ]
        let that = this;
        var {handleSubmit, handleBlur, handleDateChange, handleDropdownChange,dateOfBirth, dateReferred ,city, cityName ,state, stateName, handleRadioChange, handleCheckboxChange ,referringProviderCheckStatus} = this.props;

        return (
            //<div> Hi </div>
            <Form className="tab-content" horizontal onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-sx-9">
                        <h4>
                         <font color="#035D84" className="ng-scope"> PATIENT PROFILE</font>
                            <span className="labelText " >Account / MRN #: <span className="labelValue">New</span></span>

                            <span className="labelText">
                                Status:
                                <i className="glyphicons glyphicons-ok glyPhiconGreen displayIconsLinks ng-scope"  title="Active"></i>
                            </span>
                        </h4>

                    </div>
                </div>

                <div className="table">
                    <div className="row marginTopNegativeClass">
                        <ButtonToolbar>
                            <Button bsStyle="danger" className="buttonTabText pull-right">Cancel</Button>
                            <Button bsStyle="success" className="buttonTabText pull-right"  type="submit" onClick={handleSubmit.bind(this)}>Save</Button>
                            <Button bsStyle="info" className="buttonTabText pull-right">Site Settings</Button>
                            <Button bsStyle="primary" className="buttonTabText pull-right">Notes</Button>
                            <Button className="buttonTabText pull-right" >   Face Sheet</Button>
                            <Button bsStyle="info" className="buttonTabText pull-right">Screen Settings</Button>
                        </ButtonToolbar>
                    </div>
                </div>
                <Grid>
                    <Row className="show-grid tab-content">
                        <Col lg={4} sm={4} md={4} xs={4} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            First Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={84}>
                                            <FormControl type="text" placeholder=""  required="required" onBlur={handleBlur} name="firstName"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Middle Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="middleName"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Last Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="lastName"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Place of Service
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur}  name="placeOfService"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} id="dob" lg={4} sm={4} md={4} xs={4} >
                                            Date Of Birth
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <DatePicker
                                                onChange={this.handleDateChange.bind(this, "dateOfBirth")}
                                                value={ dateOfBirth ? dateOfBirth: '' }
                                            />
                                        </Col>
                                    </FormGroup>


                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={4} sm={4} md={4} xs={4} >
                                            Address 1
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="address1"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Address 2
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="address2"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Zip
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="zip"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            City
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <ButtonToolbar>
                                            <DropdownButton title={cityName ? cityName : "Select"} value={cityName} id="dropdown-custom-menu"  >
                                                    {
                                                        cityList.map(function (info, i) {
                                                        return (
                                                            <MenuItem key={i}
                                                              value={info.name}
                                                                onSelect={handleDropdownChange.bind(this,"city", i,info.name)}>
                                                                {info.name}
                                                            </MenuItem>
                                                        )
                                                    })
                                                    }
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            State
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <ButtonToolbar>
                                                <DropdownButton title={stateName ? stateName : "Select"} value={stateName} id="dropdown-custom-State" >
                                                    {
                                                        stateList.map(function (info, i) {
                                                            return (
                                                                <MenuItem key={i}
                                                                          value={info.name}
                                                                          onSelect={handleDropdownChange.bind(this,"state", i,info.name)}>
                                                                    {info.name}
                                                                </MenuItem>
                                                            )
                                                        })
                                                    }
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>
                                    </FormGroup>

                                </div>
                            </div>
                        </Col>
                        <Col  lg={4} sm={4} md={4} xs={4} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Chart #
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={84}>
                                            <FormControl type="text" placeholder=""  mandatory="true" onBlur={handleBlur} name="chartId"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            External patient

                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" disabled= {true} onBlur={handleBlur} name="externalPatientId"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            SSN
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="ssn"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Sex
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8} >
                                            <Radio name="radioGroup" inline
                                                   onClick={handleRadioChange.bind(this,"sex","male")}
                                                >
                                                Male
                                            </Radio>{' '}
                                            <Radio name="radioGroup" inline
                                                   onClick={handleRadioChange.bind(this,"sex","female")}
                                            >

                                               Female
                                            </Radio>{' '}
                                            <Radio name="radioGroup" inline
                                                   onClick={handleRadioChange.bind(this,"sex","unspecified")}
                                            >
                                               Unspecified
                                            </Radio>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Martial Status
                                        </Col>
                                        <Col lg={8} sm={8} md={8} xs={8}>

                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={4} sm={4} md={4} xs={4} >
                                            Employment Status
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur}  name="employmentStatus"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Ethnicity
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="ethnicity"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Preferred Language
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required" onBlur={handleBlur} name="preferredLanguage"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >

                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <b>REFERRING PHYSICIAN INFORMATION *</b>
                                        </Col>
                                        <FormGroup>
                                            <Col smOffset={2} sm={10}>
                                                <Checkbox checked={referringProviderCheckStatus ?  "true" :"false"  } onChange={ e => this.handleCheckbox("referringProviderCheckStatus",e.target.checked)} name="referringProviderCheckStatus">Patient was referred by Physician</Checkbox>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup >
                                            <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                               Referring Provider
                                            </Col>
                                            <Col  lg={4} sm={4} md={4} xs={4}>
                                                <FormControl type="text" placeholder="" required="required" onBlur={handleBlur}  name="referringProvider"/>
                                            </Col>
                                            <Col  lg={2} sm={2} md={2} xs={2}>
                                                <button type="button" className="btn btn-success btn-circle btn-lg"><i className="glyphicon glyphicon-plus"></i></button>
                                            </Col>
                                            <Col  lg={2} sm={2} md={2} xs={2}>
                                                <button type="button" className="btn btn-warning btn-circle btn-lg"><i className="glyphicon glyphicon-folder-open"></i></button>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup >
                                            <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                                Date Referred
                                            </Col>
                                            <Col  lg={8} sm={8} md={8} xs={8}>
                                                <DatePicker
                                                    onChange={this.handleDateChange.bind(this, "dateReferred")}
                                                    value={ dateReferred ? dateReferred: '' }
                                                />
                                            </Col>
                                        </FormGroup>
                                    </FormGroup>
                                </div>
                            </div>
                        </Col>
                        <Clearfix visibleSmBlock>

                        </Clearfix>
                        <Col  lg={4} sm={4} md={4} xs={4} >
                            <br />
                            <div id="mainView">
                                <div>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            First Name
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={84}>
                                            <FormControl type="text" placeholder=""  required="required"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                           Middle Name
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Last Name
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Place of Service
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Date Of Birth
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <DatePicker

                                                value={this.state.date}
                                            />
                                        </Col>
                                    </FormGroup>


                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={4} sm={4} md={4} xs={4} >
                                          Address 1
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                         <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                          Address 2
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Zip
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            City
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                           <ButtonToolbar>
                                               <DropdownButton title="Select" id="dropdown-custom-dummy">
                                                   <MenuItem eventKey="1">Action</MenuItem>
                                                   <MenuItem eventKey="2">Another action</MenuItem>
                                                   <MenuItem eventKey="3" active>
                                                       Active Item
                                                   </MenuItem>
                                                   <MenuItem divider />
                                                   <MenuItem eventKey="4">Separated link</MenuItem>
                                               </DropdownButton>
                                           </ButtonToolbar>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            State
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <ButtonToolbar>
                                                <DropdownButton title="Select" id="dropdown-custom-dummy">
                                                    <MenuItem eventKey="1">State 1</MenuItem>
                                                    <MenuItem eventKey="2">State 2</MenuItem>
                                                    <MenuItem eventKey="3" active>State 3</MenuItem>
                                                    <MenuItem divider />
                                                    <MenuItem eventKey="4">State 4</MenuItem>
                                                </DropdownButton>
                                            </ButtonToolbar>
                                        </Col>

                                    </FormGroup>


                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Form>
        )
    }
}