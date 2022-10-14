document.addEventListener('DOMContentLoaded',function (){
            
    document.querySelector('form').onsubmit = function (){
        const pressure = document.querySelector('#Sensor3').value;
        if(pressure=="0"){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const pressurename = data[0].name;
            const pressureplant = data[0]["plant-site"];
            const pressurerange = data[0].range;
            const pressuretype = data[0].type;
            const pressureunit= data[0].unit;
            const pressurevalue = data[0].value;
            
           
                document.querySelector('#pressure').innerHTML = ` Name:${pressurename} `;
                document.querySelector('#pressure1').innerHTML = ` Plant-site:${pressureplant} `;
                document.querySelector('#pressure2').innerHTML = ` Range:${pressurerange} `;
                document.querySelector('#pressure3').innerHTML = ` Type:${pressuretype} `;
                document.querySelector('#pressure4').innerHTML = ` Unit:${pressureunit} `;
                document.querySelector('#pressure5').innerHTML = ` Value:${pressurevalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        if(pressure=="1"){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
                const pressurename = data[1].name;
                const pressureplant = data[1]["plant-site"];
                const pressurerange = data[1].range;
                const pressuretype = data[1].type;
                const pressureunit= data[1].unit;
                const pressurevalue = data[1].value;
                
               
                    document.querySelector('#pressure').innerHTML = ` Name:${pressurename} `;
                    document.querySelector('#pressure1').innerHTML = ` Plant-site:${pressureplant} `;
                    document.querySelector('#pressure2').innerHTML = ` Range:${pressurerange} `;
                    document.querySelector('#pressure3').innerHTML = ` Type:${pressuretype} `;
                    document.querySelector('#pressure4').innerHTML = ` Unit:${pressureunit} `;
                    document.querySelector('#pressure5').innerHTML = ` Value:${pressurevalue} `;
            
                
            })
            .catch(error => {
                console.log('Error:', error);
            });
    
            return false;
            }
            if(pressure=="2"){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=pressure-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   
                    const pressurename = data[2].name;
                    const pressureplant = data[2]["plant-site"];
                    const pressurerange = data[2].range;
                    const pressuretype = data[2].type;
                    const pressureunit= data[2].unit;
                    const pressurevalue = data[2].value;
                    
                   
                        document.querySelector('#pressure').innerHTML = ` Name:${pressurename} `;
                        document.querySelector('#pressure1').innerHTML = ` Plant-site:${pressureplant} `;
                        document.querySelector('#pressure2').innerHTML = ` Range:${pressurerange} `;
                        document.querySelector('#pressure3').innerHTML = ` Type:${pressuretype} `;
                        document.querySelector('#pressure4').innerHTML = ` Unit:${pressureunit} `;
                        document.querySelector('#pressure5').innerHTML = ` Value:${pressurevalue} `;
                
                    
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        
                return false;
                }
                else{
                    document.querySelector('#pressure').innerHTML = ` ERROR `;
                        
                }
                return false;
            }
        });