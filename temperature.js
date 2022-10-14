document.addEventListener('DOMContentLoaded',function (){
            
    document.querySelector('form').onsubmit = function (){
        const temperature = document.querySelector('#Sensor2').value;
        if(temperature=="0"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const temperaturename = data[0].name;
            const temperatureplant = data[0]["plant-site"];
            const temperaturerange = data[0].range;
            const temperaturetype = data[0].type;
            const temperatureunit= data[0].unit;
            const temperaturevalue = data[0].value;
            
           
                document.querySelector('#temperature').innerHTML = ` Name:  ${temperaturename} `;
                document.querySelector('#temperature1').innerHTML = ` Plant-site:${temperatureplant} `;
                document.querySelector('#temperature2').innerHTML = ` Range:${temperaturerange} `;
                document.querySelector('#temperature3').innerHTML = ` Type:${temperaturetype} `;
                document.querySelector('#temperature4').innerHTML = ` Unit:${temperatureunit} `;
                document.querySelector('#temperature5').innerHTML = ` Value: ${temperaturevalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }

        if(temperature=="1"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const temperaturename = data[1].name;
            const temperaturplant = data[1]["plant-site"];
            const temperaturerange = data[1].range;
            const temperaturetype = data[1].type;
            const temperatureunit= data[1].unit;
            const temperaturevalue = data[1].value;
            
           
                document.querySelector('#temperature').innerHTML = ` Name:  ${temperaturename} `;
                document.querySelector('#temperature1').innerHTML = ` Plant-site:  ${temperaturplant} `;
                document.querySelector('#temperature2').innerHTML = ` Range:  ${temperaturerange} `;
                document.querySelector('#temperature3').innerHTML = ` Type:  ${temperaturetype} `;
                document.querySelector('#temperature4').innerHTML = ` Unit:  ${temperatureunit} `;
                document.querySelector('#temperature5').innerHTML = ` Value:  ${temperaturevalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        if(temperature=="2"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=temperature-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const temperaturename = data[2].name;
            const temperatureplant = data[2]["plant-site"];
            const temperaturerange = data[2].range;
            const temperaturetype = data[2].type;
            const temperatureunit= data[2].unit;
            const temperaturevalue = data[2].value;
            
           
                document.querySelector('#temperature').innerHTML = ` Name:  ${temperaturename} `;
                document.querySelector('#temperature1').innerHTML = ` Plant-site:  ${temperatureplant} `;
                document.querySelector('#temperature2').innerHTML = ` Range:  ${temperaturerange} `;
                document.querySelector('#temperature3').innerHTML = ` Type:  ${temperaturetype} `;
                document.querySelector('#temperature4').innerHTML = ` Unit:  ${temperatureunit} `;
                document.querySelector('#temperature5').innerHTML = ` Value:  ${temperaturevalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        else{
            document.querySelector('#temperature').innerHTML = ` ERROR `;
                
        }
        return false;
    }
});