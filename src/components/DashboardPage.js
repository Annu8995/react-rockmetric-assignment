import React from 'react';
import {connect} from 'react-redux';
import { setFirstName, setLastName, setEmailId, setGender, setAge, setMaritalStatus, setQualification } from '../actions/user';
import OptionModal from './OptionModal';

// const DashboardPage = (props) => (
//         <div>
//             <form onSubmit={(e) => {
//                 e.preventDefault();
//                 // return <OptionModal />
//             }}>
//                 FIRSTNAME: <input type="text" value={props.user.firstName} onChange={(e) => {
//                     console.log("FIRSTNAME " + e.target.value);
//                     props.dispatch(setFirstName(e.target.value));
//                 }}/>
//                 LASTNAME: <input type="text" value={props.user.lastName} onChange={(e) => {
//                         console.log("LASTNAME " + e.target.value);
//                         props.dispatch(setLastName(e.target.value));
//                     }}/>
//                 EMAILID: <input type="text" value={props.user.emailId} onChange={(e) => {
//                         console.log("EMAILID " + e.target.value);
//                         props.dispatch(setEmailId(e.target.value));
//                     }}/>
//                 GENDER: <select value={props.user.gender} onChange={(e) => {  
//                         console.log("GENDER " + e.target.value);
//                         props.dispatch(setGender(e.target.value));            
//                     }}>
//                         <option value="FEMALE">FEMALE</option>
//                         <option value="MALE">MALE</option>
//                     </select>
//                 AGE: <input type="number" value={props.user.age} onChange={(e) => {
//                         console.log(e.target.value);
//                         props.dispatch(setAge(e.target.value));
//                 }}/>
//                 <button>Submit</button>
//             </form>        
//         </div>
// );



class DashboardPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            submit: undefined,
            buttonHidden: props.buttonHidden,
            user: props.user
        }
    }

    handleSelectedOption = () => {
        this.setState(() => ({
            submit: undefined
        }))
    }
    // UNSAFE_componentWillMount(){
    //     console.log("Welcome");
    // }

    componentDidMount(){
        console.log("Mount Completed");
    }
    onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.first_name.value);
        this.setState(() => ({
            submit: true,            
            user: {
                firstName: e.target.first_name.value,
                lastName: e.target.last_name.value,
                emailId:  e.target.email_id.value,
                gender:  e.target.gender.value,
                age:  e.target.age.value,
                maritalStatus: e.target.maritalStatus.value,
                qualification: e.target.qualification.value
            }
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    FIRSTNAME: <input type="text" value={this.props.user.firstName} name='first_name' onChange={(e) => {
                        console.log("FIRSTNAME " + e.target.value);
                        this.props.dispatch(setFirstName(e.target.value));
                    }}/>
                    LASTNAME: <input type="text" value={this.props.user.lastName} name='last_name' onChange={(e) => {
                            console.log("LASTNAME " + e.target.value);
                            this.props.dispatch(setLastName(e.target.value));
                        }}/>
                    EMAILID: <input type="text" value={this.props.user.emailId} name='email_id' onChange={(e) => {
                            console.log("EMAILID " + e.target.value);
                            this.props.dispatch(setEmailId(e.target.value));
                        }}/>
                    GENDER: <select value={this.props.user.gender} name='gender' onChange={(e) => {  
                            console.log("GENDER " + e.target.value);
                            this.props.dispatch(setGender(e.target.value));            
                        }}>
                            <option value="FEMALE">FEMALE</option>
                            <option value="MALE">MALE</option>
                        </select>
                    AGE: <input type="number" value={this.props.user.age} name='age' onChange={(e) => {
                            console.log(e.target.value);
                            this.props.dispatch(setAge(e.target.value));
                    }}/>
                    <div>
                        MARITAL STATUS:
                        MARRIED <input type="radio" value='MARRIED' name='maritalStatus' checked={this.props.user.maritalStatus === 'MARRIED'} onChange={(e) => {
                            console.log(e.target.value);
                            this.props.dispatch(setMaritalStatus(e.target.value));                    
                            }}/>
                        UNMARRIED <input type="radio" value='UNMARRIED' name='maritalStatus' checked={this.props.user.maritalStatus === 'UNMARRIED'} onChange={(e) => {
                            console.log(e.target.value);
                            this.props.dispatch(setMaritalStatus(e.target.value));                    
                            }}/>
                    </div>
                    
                    Qualification:
                    10 <input type="checkbox" value='ten' name='qualification' checked={this.props.user.qualification === 'ten'} onChange={(e) => {
                        console.log(e.target.value);
                        this.props.dispatch(setQualification(e.target.value));                    
                        }}/>
                    12 <input type="checkbox" value='twelve' name='qualification' checked={this.props.user.qualification === 'twelve'} onChange={(e) => {
                        console.log(e.target.value);
                        this.props.dispatch(setQualification(e.target.value));                    
                        }}/>
                    BTECH <input type="checkbox" value='BTECH' name='qualification' checked={this.props.user.qualification === 'BTECH'} onChange={(e) => {
                        console.log(e.target.value);
                        this.props.dispatch(setQualification(e.target.value));                    
                        }}/>

                    <button hidden={!!this.state.buttonHidden}>Submit</button>
                </form>  
                <OptionModal selectedOption={this.state.submit} handleSelectedOption={this.handleSelectedOption} user={JSON.stringify(this.state.user)}/>      
            </div>
        );        
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(DashboardPage);