document.addEventListener('DOMContentLoaded',function (){
            
    document.querySelector('form').onsubmit = function (){
        const flow = document.querySelector('#Sensor').value;
        if(flow==0){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const flowname = data[0].name;
            const flowplant = data[0]["plant-site"];
            const flowrange = data[0].range;
            const flowtype = data[0].type;
            const flowunit= data[0].unit;
            const flowvalue = data[0].value;
            
           
                document.querySelector('#result').innerHTML = ` Name:  ${flowname} `;
                document.querySelector('#result1').innerHTML = ` Plant-site:  ${flowplant} `;
                document.querySelector('#result2').innerHTML = ` Range:  ${flowrange} `;
                document.querySelector('#result3').innerHTML = ` Type:  ${flowtype} `;
                document.querySelector('#result4').innerHTML = ` Unit:  ${flowunit} `;
                document.querySelector('#result5').innerHTML = ` Value:  ${flowvalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }

        if(flow==1){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const flowname = data[1].name;
            const flowplant = data[1]["plant-site"];
            const flowrange = data[1].range;
            const flowtype = data[1].type;
            const flowunit= data[1].unit;
            const flowvalue = data[1].value;
            
           
                document.querySelector('#result').innerHTML = ` Name:  ${flowname} `;
                document.querySelector('#result1').innerHTML = ` Plant-site:  ${flowplant} `;
                document.querySelector('#result2').innerHTML = ` Range:  ${flowrange} `;
                document.querySelector('#result3').innerHTML = ` Type:  ${flowtype} `;
                document.querySelector('#result4').innerHTML = ` Unit:  ${flowunit} `;
                document.querySelector('#result5').innerHTML = ` Value:  ${flowvalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        if(flow==2){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=flow-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const flowname = data[2].name;
            const flowplant = data[2]["plant-site"];
            const flowrange = data[2].range;
            const flowtype = data[2].type;
            const flowunit= data[2].unit;
            const flowvalue = data[2].value;
            
           
                document.querySelector('#result').innerHTML = ` Name:  ${flowname} `;
                document.querySelector('#result1').innerHTML = ` Plant-site:  ${flowplant} `;
                document.querySelector('#result2').innerHTML = ` Range:  ${flowrange} `;
                document.querySelector('#result3').innerHTML = ` Type:  ${flowtype} `;
                document.querySelector('#result4').innerHTML = ` Unit:  ${flowunit} `;
                document.querySelector('#result5').innerHTML = ` Value:  ${flowvalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        else{
            document.querySelector('#result').innerHTML = ` ERROR `;
                
        }
        return false;
    }
});