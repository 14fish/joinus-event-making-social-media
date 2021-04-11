import React, { useEffect } from 'react';
import { Who,About,Photos,Events } from './components';
import {connect} from "react-redux";
import {getDetails} from "../../../store/profile";
import moment from "moment";
import styled from 'styled-components'; 


import { Card, Row , Col,Button  } from "antd"; 

const mapStatetoProps=(store)=>{
    return{
        profile:store.profile
    }
}



export const Profile = connect(mapStatetoProps,{getDetails}) (function (props) {

    const {profile} = props;

    useEffect(() => {
        props.getDetails();
       
    }, [])

    


    return (
        <div>
            <Row>
                <StyledCol className="col-margin" span={21}  >
                    <StyledCard>
                            <Who 
                             name={profile.name}
                             surname={profile.surname}
                             age={21} 
                             city={profile.city} image={profile.image}
                              />         
                    </StyledCard>
                </StyledCol>
            </Row>

             <StyledRow>
                <Col className="col-margin2 bs-mr" span={15}  >
                    <StyledCard>
                   
                        <About since={profile.createdAt} regTime={profile.regTime} name={profile.name} interest = {profile.interest} city={profile.city} />
                        
                    </StyledCard>
                </Col>
                <Col span={5} className="margin-left-btn"  >
                    <StyledCard>
                        <Button type="primary" ghost block>Follow User</Button>
                    </StyledCard>
                </Col>
            </StyledRow>
            
            <StyledRow>
                <Col className="col-margin2 bs-mr" span={15}  >
                    <StyledCard>          
                            <Photos photos={profile.photos} />             
                    </StyledCard>
                </Col>
            </StyledRow>

            <StyledRow  /*   style={{border:"1px solid aqua"}} */>
                <Col className="col-margin2 bs-mr mr-b" span={15}  >
                    <StyledCard> 
                            <Events /> 
                    </StyledCard>
                </Col>
            </StyledRow> 
        </div>
    )
                        })
const StyledCol = styled(Col)`
    padding-top:80px
    @media only screen and (min-width: 320px) and (max-width:767px) {
        margin-left:28px !important
    }
    `
    const StyledCard = styled(Card)`
    @media only screen and (min-width: 320px) and (max-width:767px) {
        width:200px
        transform: translateX(39px);
    }
    `
     const StyledRow = styled(Row)`
    @media only screen and (min-width: 320px) and (max-width:767px) {
        margin-left: -36px !important;
       
    }
    
    `