import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Typography } from '@mui/material';
import {Container, Table, Form} from "react-bootstrap";
const BigNumber = require('bignumber.js');



let initialTextContent = "" +
    "2017-01-11 19:12\n" +
    "1:7579\n" +
    "2:48988\n" +
    "3:5064\n" +
    "4:48142\n" +
    "5:37967\n" +
    "6:48877\n" +
    "7:63814\n" +
    "8:17575\n" +
    "9:0\n" +
    "10:0\n" +
    "11:24224\n" +
    "12:15965\n" +
    "13:0\n" +
    "14:0\n" +
    "15:0\n" +
    "16:0\n" +
    "17:87\n" +
    "18:0\n" +
    "19:9891\n" +
    "20:16221\n" +
    "21:65480\n" +
    "22:65535\n" +
    "23:39041\n" +
    "24:48994\n" +
    "25:0\n" +
    "26:0\n" +
    "27:0\n" +
    "28:0\n" +
    "29:144\n" +
    "30:0\n" +
    "31:48777\n" +
    "32:16191\n" +
    "33:15568\n" +
    "34:16611\n" +
    "35:28424\n" +
    "36:16534\n" +
    "37:7424\n" +
    "38:15783\n" +
    "39:14592\n" +
    "40:15758\n" +
    "41:5461\n" +
    "42:49087\n" +
    "43:45184\n" +
    "44:15493\n" +
    "45:36608\n" +
    "46:15459\n" +
    "47:29184\n" +
    "48:15516\n" +
    "49:0\n" +
    "50:0\n" +
    "51:0\n" +
    "52:0\n" +
    "53:6432\n" +
    "54:4386\n" +
    "55:5889\n" +
    "56:0\n" +
    "57:0\n" +
    "58:0\n" +
    "59:0\n" +
    "60:255\n" +
    "61:120\n" +
    "62:0\n" +
    "63:0\n" +
    "64:0\n" +
    "65:0\n" +
    "66:4001\n" +
    "67:62500\n" +
    "68:0\n" +
    "69:0\n" +
    "70:3\n" +
    "71:4\n" +
    "72:4\n" +
    "73:3606\n" +
    "74:16800\n" +
    "75:54913\n" +
    "76:48896\n" +
    "77:35706\n" +
    "78:17101\n" +
    "79:44042\n" +
    "80:17099\n" +
    "81:33339\n" +
    "82:16963\n" +
    "83:42500\n" +
    "84:49530\n" +
    "85:33468\n" +
    "86:16963\n" +
    "87:33210\n" +
    "88:16963\n" +
    "89:2885\n" +
    "90:16512\n" +
    "91:0\n" +
    "92:806\n" +
    "93:3501\n" +
    "94:3501\n" +
    "95:0\n" +
    "96:1\n" +
    "97:43137\n" +
    "98:17105\n" +
    "99:3374\n" +
    "100:17839\n";


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputText: initialTextContent};
    }

    render() {
        return (
            <div>
                <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" noWrap>
          Gambit Challenge App   TUF-2000M  
          </Typography>
        </Toolbar>
        
        
      </AppBar> 
                <Container>
                    <br></br>
                    <br></br>

                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label><h6>Input Feed</h6></Form.Label>
                            <Form.Control as='textarea' rows={10} value={this.state.inputText} onChange={
                                (event) => {
                                    this.setState({inputText: event.target.value});
                                }
                            }/>
                        </Form.Group>

                        <Form.Group className='mt-3'>
                            <Form.Label>Results convertion</Form.Label>
                            <Table>
                                <thead>
                                <tr>
                                    <th>Register</th>
                                    <th>Raw data</th>
                                    <th>Name</th>
                                    <th>Binary</th>
                                    <th>Result</th>
                                    <th>Unit</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>9-10</td>
                                    <td>{raw_data(9, 10, this.state.inputText)}</td>
                                    <td>Positive accumulator </td>
                                    <td>{getBinaryLong(9, 10, this.state.inputText)}</td>
                                    <td>{getDecimalLong(9, 10, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>13-14</td>
                                    <td>{raw_data(13, 14, this.state.inputText)}</td>
                                    <td>Negative accumulator  </td>
                                    <td>{getBinaryLong(13, 14, this.state.inputText)}</td>
                                    <td>{getDecimalLong(13, 14, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>17-18</td>
                                    <td>{raw_data(17, 18, this.state.inputText)}</td>
                                    <td>Positive energy accumulator </td>
                                    <td>{getBinaryLong(17, 18, this.state.inputText)}</td>
                                    <td>{getDecimalLong(17, 18, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>21-22</td>
                                    <td>{raw_data(21, 22, this.state.inputText)}</td>
                                    <td>Negative energy accumulator</td>
                                    <td>{getBinaryLong(21, 22, this.state.inputText)}</td>
                                    <td>{getDecimalLong(21, 22, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>25-26</td>
                                    <td>{raw_data(25, 26, this.state.inputText)}</td>
                                    <td>Net accumulator</td>
                                    <td>{getBinaryLong(25, 26, this.state.inputText)}</td>
                                    <td>{getDecimalLong(25, 26, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>29-30</td>
                                    <td>{raw_data(29, 30, this.state.inputText)}</td>
                                    <td>Net energy accumulator</td>
                                    <td>{getBinaryLong(29, 30, this.state.inputText)}</td>
                                    <td>{getDecimalLong(29, 30, this.state.inputText)}</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>103-104</td>
                                    <td>{raw_data(103, 104, this.state.inputText)}</td>
                                    <td>Working Timer</td>
                                    <td>{getBinaryLong(103, 104, this.state.inputText)}</td>
                                    <td>{getDecimalLong(103, 104, this.state.inputText)}</td>
                                    <td> unsigned，in second</td>
                                   
                                   
                                </tr>
                                <tr>
                                    <td>105-106</td>
                                    <td>{raw_data(105, 106, this.state.inputText)}</td>
                                    <td>Total working time </td>
                                    <td>{getBinaryLong(105, 106, this.state.inputText)}</td>
                                    <td>{getDecimalLong(105, 106, this.state.inputText)}</td>
                                    <td> unsigned，in second</td>
                                    
                                </tr>
                               
                                <tr>
                                    <td>129-130 </td>
                                    <td>{raw_data(129, 130, this.state.inputText)}</td>
                                    <td>Manual accumulator</td>
                                    <td>{getBinaryLong(129, 130, this.state.inputText)}</td>
                                    <td>{getDecimalLong(129, 130, this.state.inputText)}</td>
                                   
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>133-134  </td>
                                    <td>{raw_data(133, 134, this.state.inputText)}</td>
                                    <td>Batch accumulator</td>
                                    <td>{getBinaryLong(133, 134, this.state.inputText)}</td>
                                    <td>{getDecimalLong(133, 134, this.state.inputText)}</td>
                                    
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>137-138  </td>
                                    <td>{raw_data(137, 138, this.state.inputText)}</td>
                                    <td>Flow for today </td>
                                    <td>{getBinaryLong(137, 138, this.state.inputText)}</td>
                                    <td>{getDecimalLong(137, 138, this.state.inputText)}</td>
                                   
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>141-142  </td>
                                    <td>{raw_data(141, 142, this.state.inputText)}</td>
                                    <td>Flow for this month </td>
                                    <td>{getBinaryLong(141, 142, this.state.inputText)}</td>
                                    <td>{getDecimalLong(141, 142, this.state.inputText)}</td>
                                   
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>145-146  </td>
                                    <td>{raw_data(145, 146, this.state.inputText)}</td>
                                    <td>Flow for this year </td>
                                    <td>{getBinaryLong(145, 146, this.state.inputText)}</td>
                                    <td>{getDecimalLong(145, 146, this.state.inputText)}</td>
                                    
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>165-166  </td>
                                    <td>{raw_data(165, 166, this.state.inputText)}</td>
                                    <td>Failure timer</td>
                                    <td>{getBinaryLong(165, 166, this.state.inputText)}</td>
                                    <td>{getDecimalLong(165, 166, this.state.inputText)}</td>
                                    <td>In unit second</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>311-312  </td>
                                    <td>{raw_data(311, 312, this.state.inputText)}</td>
                                    <td>Worked time for today </td>
                                    <td>{getBinaryLong(311, 312, this.state.inputText)}</td>
                                    <td>{getDecimalLong(311, 312, this.state.inputText)}</td>
                                    
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>313-314  </td>
                                    <td>{raw_data(311, 312, this.state.inputText)}</td>
                                    <td>Worked time for this month </td>
                                    <td>{getBinaryLong(311, 312, this.state.inputText)}</td>
                                    <td>{getDecimalLong(311, 312, this.state.inputText)}</td>
                                    
                                    <td></td>
                                </tr>


                                </tbody>
                            </Table>
                        </Form.Group>

                    </Form>
                </Container>
            </div>
        );
    }
}

function getRegister(registerNumber, inputText) {

    const lines = inputText.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let position = line.search(registerNumber+":");
        if(position===0) {
            let value = line.substring((registerNumber.toString().length+1), line.length);
            return Number(value);
        }
    }
    console.error("cannot find register: " + registerNumber + " in input text")
    return Number("0");
}
function getRawData(registerNumber, inputText){
    const lines = inputText.split('\n');
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        let position = line.search(registerNumber+":");
        if(position===0) {
            let value = line.substring((registerNumber.toString().length+1), line.length);
            return value;
        }
    }
    console.error("cannot find register: " + registerNumber + " in input text")
    return "no data";

}

function raw_data(registerNumber1, registerNumber2, inputText){
    let first = getRawData(registerNumber1, inputText);
    let two = getRawData(registerNumber2, inputText);
    if (first!= 'no data' ){
    let raw_to_show= first+'-'+two;
    return raw_to_show;
    }
    else{
        return 'no data';  
    } 
} 

function getBinaryLong(registerNumber1, registerNumber2, inputText) {
    let value1 = getRegister(registerNumber1, inputText);
    let value2 = getRegister(registerNumber2, inputText);
    return inputToLongBinaryString(value1, value2);
}

function getDecimalLong(registerNumber1, registerNumber2, inputText) {
    let binary = getBinaryLong(registerNumber1, registerNumber2, inputText)
    return "" + binaryToDecimal(binary, 3);
}


function binaryToDecimal(binaryString, typeIndex) {
    // 0: unsigned; 1: 8-bit signed; 2: 16-bit signed; 3: 32-bit signed
    let x = new BigNumber(binaryString, 2)
    let y = new BigNumber(x);
    if (typeIndex > 0) {
        let look = [0, 256, 65536, 4294967296];
        let max = [0, 127, 32767, 2147483647];
        if (x.gt(max[typeIndex])) y = y.minus(look[typeIndex]);
        if (x.isNegative() || x.gte(look[typeIndex])) y = "";
    }
    return y;
}

function inputToLongBinaryString(value1, value2) {
    let stringBinary1 = pad16(value1.toString(2));
    let stringBinary2 = pad16(value2.toString(2));
    return stringBinary2.concat(stringBinary1);
}

function pad16(num) {
    let s = "0000000000000000" + num;
    return s.substring(s.length-16);
}

export default App;
