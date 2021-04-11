import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { getCategories } from "./../../../../store/categories";
import { createEvent,updateEvent } from "./../../../../store/event";
import { useHistory } from "react-router-dom";
import { Form, Input, Select, DatePicker, Row, Col, Card, Button, TimePicker } from "antd";
import moment from 'moment';
import PLacesAutocomplete from "react-places-autocomplete";
import styled from 'styled-components';
import './style/createEventForm.css';



const mapStatetoProps = (store) => {
    return {
        categories: store.categories.categories,
        updated:store.events.updated
    }
}

let MyForm = Form.create({ name: 'creave_event' })(props => {
    

    let history=useHistory();
  
    const [state, setState] = useState({});

    const { categories, location, setLocation } = props
 

    const { TextArea } = Input;
    const google = window.google;
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched, validateFields,getFieldsValue } = props.form;

    useEffect(() => {
        props.getCategories();
        if(props.updated.location){
            
            setLocation(props.updated.location)
        }

    }, [])
    
    
    const handleInputChange = (name, value) => {


        setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
        
    }
    const handleLocationSelect = (name, value) => {

        props.form.setFields({
            location: {
              value: value,
            
            }});
        handleInputChange(name, value);
        const geo = new google.maps.Geocoder();
        geo.geocode({ 'address': value }, function (results, status) {
            
            if (status === google.maps.GeocoderStatus.OK) {
                let latitude = results[0].geometry.location.lat();
                let longitude = results[0].geometry.location.lng();

                setLocation({ latitude, longitude })

                // let city = results[0].address_components.filter(x => x.types.includes("locality"))[0].short_name;
                // setCity(city);
            } else {
                console.log("Geocode was not successful for the following reason: " + status);
            }
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        validateFields((err, fieldsValue) => {

            if (err) {
                return;
            }
            let data = { ...state, location };
            
            console.log(state,location,props.updated);
            if(props.updated.id){
                let temp = {...props.updated,...state,...{location}};
                props.updateEvent(temp,history);
            }
            else{
                props.createEvent(data,history);
            }
            
          
          
        })
    };






    function hasErrors(fieldsError) {
        return Object.keys(fieldsError).some(field => fieldsError[field]);
    }

    const {updated} = props;
    return (
        <div>
            <Card title="Create a New Event!">
                <Form onSubmit={handleSubmit}>
                    <FormItem labelAlign='left'  label="Title">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Please input your title for event!' }],
                            initialValue:updated.title
                        })(
                            <Input onChange={(e) => handleInputChange("title", e.target.value)} placeholder="Pick a Name for your event" />
                        )}
                    </FormItem>

                    <FormItem labelAlign='left' label="Location of Event">
                     {getFieldDecorator('location', 
                     {  rules: [{ required: true,  message: 'Enter a location for an event!' }],
                        initialValue:updated.place
                        }

                     )
                        (
                            <PLacesAutocomplete 
                            name="place"
                            onSelect={(value) => handleLocationSelect("place", value)}
                            value={updated.place}
                            onError={(e) => console.log(e)}
                            >
                            {
                                ({
                                getInputProps,
                                suggestions,
                                getSuggestionItemProps,
                                }) => (
                                    <div>
                                       
                                            <Input
                                                {...getInputProps({
                                                    placeholder: "Type address"
                                                })}
                                            />

                                        <div className='search-suggestion'>

                                            {suggestions.map(suggestion => {
                                                const style = {
                                                    backgroundColor: suggestion.active
                                                        ? "#e6f7ff"
                                                        : "#fff",
                                                    display: 'block',
                                                    padding: '5px 12px',
                                                    overflow: 'hidden',
                                                    color: 'rgba(0, 0, 0, 0.65)',
                                                    fontWeight: 'normal',
                                                    lineHeight: '22px',
                                                    whiteSpace: 'nowrap',
                                                    textOverflow: 'ellipsis',
                                                    cursor: 'pointer',
                                                    transition: 'background 0.3s ease',
                                                };

                                                return (
                                                    <div
                                                        {...getSuggestionItemProps
                                                            (
                                                            suggestion,
                                                            { style }
                                                            )
                                                        }
                                                    >
                                                        {suggestion.description}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                )}
                        </PLacesAutocomplete>
                        )
                    }
                    </FormItem>

                    <Row type="flex" justify="space-between">
                        <Col>
                            <FormItem labelAlign='left' label="Category">
                                {getFieldDecorator('category', {
                                    rules: [{ required: true, message: 'Please select a category!' }],
                                    initialValue:updated.category
                                })(
                                    <Select
                                        showSearch
                                        style={{ width: 500 }}
                                        placeholder="Select a category"
                                        optionFilterProp="children"
                                        onSelect={(value) => handleInputChange('category', value)}
                                        name="category"
                                        filterOption={(input, option) =>
                                            option.props.children
                                                .toLowerCase()
                                                .indexOf(input.toLowerCase()) >= 0
                                        }
                                    >
                                        {categories.map(x => (
                                            <Select.Option onSelect={(value) => handleInputChange('category', value)} key={x.id} value={x.id}>
                                                {x.name}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                )}
                            </FormItem>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={8} className="date">
                            <FormItem labelAlign='left' label="Date">
                                {getFieldDecorator('date', {
                                    rules: [{ required: true, message: 'Please input date!' }],
                                    initialValue:updated.date?moment(updated.date,"DD/MM/YYYY"):moment()
                                })(
                                    <DatePicker style={{ width: 200 }} onChange={(value) => handleInputChange("date", value ? value.format("DD/MM/YYYY") : moment().format("DD/MM/YYYY"))} name="date"
                                        format={"DD/MM/YY"}
                                    />)}
                            </FormItem>
                        </Col>
                        <Col span={8}>
                            <FormItem labelAlign='left' label="Time">
                                {getFieldDecorator('time', {
                                    rules: [{ required: true, message: 'Please input time' }],
                                    initialValue:updated.time?moment(updated.time,"HH:mm"):moment()
                                })(
                                    <TimePicker
                                        style={{ width: 200 }}
                                        minuteStep={15}
                                        defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}
                                        format={"HH:mm"}
                                        onChange={(value) => handleInputChange("time", value ? value.format("HH:mm") : moment().format("HH:mm"))}
                                    />)}
                            </FormItem>
                        </Col>
                    </Row>
                    <FormItem labelAlign='left' label="Description">
                        {getFieldDecorator('description', {
                            rules: [{ required: true,  message: 'Please input description!' }],
                            initialValue:updated.description
                        })(
                            <TextArea
                                onChange={(e) => handleInputChange("description", e.target.value)} 
                                name="description"
                                placeholder="Tell us about your event"
                                autoSize={{ minRows: 3, maxRows: 5 }}
                            />)}
                    </FormItem>
                    <Button htmlType="submit" disabled={hasErrors(getFieldsError())} type="primary">{updated.id?"Update":"Create"}</Button>
                </Form>
            </Card>
        </div>
    );
}
);

export const CreateEventForm = connect(mapStatetoProps, { getCategories, createEvent,updateEvent })(MyForm);

const FormItem = styled(Form.Item)`
    min-width:100%
    color:#e6fffb;
`

