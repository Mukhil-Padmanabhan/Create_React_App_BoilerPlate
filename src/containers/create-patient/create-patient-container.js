import React, { Component } from 'react';
import {Form, Grid, Row , Col , Clearfix ,FieldGroup ,Checkbox , Radio, ControlLabel ,Button ,FormGroup,FormControl,ButtonToolbar,MenuItem,DropdownButton } from 'react-bootstrap'
import moment from 'moment';
import DatePicker from 'react-date-picker';

export default class CreatePatientContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(value) {
        this.setState({
            date: value
        });
    }


    render() {
        return (
            //<div> Hi </div>
            <Form horizontal >
                <div className="row">
                    <div className="col-md-9 col-sm-9 col-sx-9">
                        <h4>
                            <span className="pageHeaders">Patient Profile</span>
                            <span className="labelText " >Account / MRN #: <span className="labelValue">New</span></span>

                            <span className="labelText">
                                Status:
                                <i className="glyphicons glyphicons-ok glyPhiconGreen displayIconsLinks ng-scope"  title="Active"></i>
                            </span>
                        </h4>
                    </div>
                    <div className="col-md-3 col-sm-3 col-sx-3">
                        <ButtonToolbar>

                            <Button bsStyle="info" className="buttonTabText pull-right">Screen Settings</Button>

                        </ButtonToolbar>
                    </div>
                </div>

                <div className="table">
                    <div className="row marginTopNegativeClass">
                        <ButtonToolbar>
                            <Button bsStyle="warning" className="buttonTabText pull-right">Cancel</Button>
                            <Button bsStyle="success" className="buttonTabText pull-right">Save</Button>
                            <Button bsStyle="info" className="buttonTabText pull-right">Site Settings</Button>
                            <Button bsStyle="primary" className="buttonTabText pull-right">Notes</Button>
                            <Button className="buttonTabText pull-right" >   Face Sheet</Button>
                        </ButtonToolbar>
                    </div>
                </div>


                <Grid>
                    <Row className="show-grid">
                        <Col lg={4} sm={4} md={4} xs={4} >
                            <br />
                            <div id="mainView">
                                <div className="tab-content">
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            First Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={84}>
                                            <FormControl type="text" placeholder=""  required="required"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Middle Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Last Name
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Place of Service
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} id="dob" lg={4} sm={4} md={4} xs={4} >
                                            Date Of Birth
                                            <font color="red" >*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <DatePicker
                                                onChange={this.handleChange}
                                                value={this.state.date}
                                            />
                                        </Col>
                                    </FormGroup>


                                    <FormGroup >
                                        <Col componentClass={ControlLabel}  lg={4} sm={4} md={4} xs={4} >
                                            Address 1
                                            <font color="red" className="ng-scope">*</font>
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
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            City
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <ButtonToolbar>
                                                <DropdownButton title="Select">
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
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <ButtonToolbar>
                                                <DropdownButton title="Select">
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
                        <Col  lg={4} sm={4} md={4} xs={4} >
                            <br />
                            <div id="mainView">
                                <div className="tab-content">
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Chart #
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={84}>
                                            <FormControl type="text" placeholder=""  mandatory={true}/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            External patient

                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" disabled= {true} />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            SSN
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Sex
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <Radio name="male" inline>
                                                Male
                                            </Radio>{' '}
                                            <Radio name="female" inline>
                                                Female
                                            </Radio>{' '}
                                            <Radio name="unspecified" inline>
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
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Ethnicity
                                            <font color="red" className="ng-scope">*</font>
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup >
                                        <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                            Preferred Language
                                        </Col>
                                        <Col  lg={8} sm={8} md={8} xs={8}>
                                            <FormControl type="text" placeholder="" required="required"/>
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
                                                <Checkbox checked>Patient was referred by Physician</Checkbox>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup >
                                            <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                               Referring Provider
                                            </Col>
                                            <Col  lg={4} sm={4} md={4} xs={4}>
                                                <FormControl type="text" placeholder="" required="required"/>
                                            </Col>
                                            <Col  lg={2} sm={2} md={2} xs={2}>
                                                <button type="button" class="btn btn-success btn-circle btn-lg"><i class="glyphicon glyphicon-plus"></i></button>
                                            </Col>
                                            <Col  lg={2} sm={2} md={2} xs={2}>
                                                <button type="button" class="btn btn-warning btn-circle btn-lg"><i class="glyphicon glyphicon-folder-open"></i></button>
                                            </Col>
                                        </FormGroup>
                                        <FormGroup >
                                            <Col componentClass={ControlLabel} lg={4} sm={4} md={4} xs={4} >
                                                Date Referred
                                            </Col>
                                            <Col  lg={8} sm={8} md={8} xs={8}>
                                                <DatePicker
                                                    onChange={this.handleChange}
                                                    value={this.state.date}
                                                />
                                            </Col>
                                        </FormGroup>
                                    </FormGroup>
                                </div>
                            </div>
                        </Col>
                        <Clearfix visibleSmBlock>
                            <code>&lt;{'Clearfix visibleSmBlock'} /">">">">&gt;</code>
                        </Clearfix>
                        <Col  lg={4} sm={4} md={4} xs={4} >

                            <br />
                            <div id="mainView">
                                <div className="tab-content">
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
                                                onChange={this.handleChange}
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
                                               <DropdownButton title="Select">
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
                                                <DropdownButton title="Select">
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