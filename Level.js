document.addEventListener('DOMContentLoaded',function (){
            
    document.querySelector('form').onsubmit = function (){
        const level = document.querySelector('#Sensor1').value;
        if(level==0){
        fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
        .then(response => response.json())
        .then(data => {
            console.log(data);
           
            const levelname = data[0].name;
            const levelplant = data[0]["plant-site"];
            const levelrange = data[0].range;
            const leveltype = data[0].type;
            const levelunit= data[0].unit;
            const levelvalue = data[0].value;
            
           
                document.querySelector('#level').innerHTML = ` Name:${levelname} `;
                document.querySelector('#level1').innerHTML = ` Plant-site:${levelplant} `;
                document.querySelector('#level2').innerHTML = ` Range:${levelrange} `;
                document.querySelector('#level3').innerHTML = ` Type:${leveltype} `;
                document.querySelector('#level4').innerHTML = ` Unit:${levelunit} `;
                document.querySelector('#level5').innerHTML = ` Value:${levelvalue} `;
        
            
        })
        .catch(error => {
            console.log('Error:', error);
        });

        return false;
        }
        if(level==1){
            fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
            .then(response => response.json())
            .then(data => {
                console.log(data);
               
                const levelname = data[1].name;
                const levelplant = data[1]["plant-site"];
                const levelrange = data[1].range;
                const leveltype = data[1].type;
                const levelunit= data[1].unit;
                const levelvalue = data[1].value;
                
               
                    document.querySelector('#level').innerHTML = ` Name:${levelname} `;
                    document.querySelector('#level1').innerHTML = ` Plant-site:${levelplant} `;
                    document.querySelector('#level2').innerHTML = ` Range:${levelrange} `;
                    document.querySelector('#level3').innerHTML = ` Type:${leveltype} `;
                    document.querySelector('#level4').innerHTML = ` Unit:${levelunit} `;
                    document.querySelector('#level5').innerHTML = ` Value:${levelvalue} `;
            
                
            })
            .catch(error => {
                console.log('Error:', error);
            });
    
            return false;
            }
            if(level==2){
                fetch('https://midterm-exam-010723313-2022.herokuapp.com/device?sensor_type=level-transducer')
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                   
                    const levelname = data[2].name;
                    const levelplant = data[2]["plant-site"];
                    const levelrange = data[2].range;
                    const leveltype = data[2].type;
                    const levelunit= data[2].unit;
                    const levelvalue = data[2].value;
                    
                   
                        document.querySelector('#level').innerHTML = ` Name:${levelname} `;
                        document.querySelector('#level1').innerHTML = ` Plant-site:${levelplant} `;
                        document.querySelector('#level2').innerHTML = ` Range:${levelrange} `;
                        document.querySelector('#level3').innerHTML = ` Type:${leveltype} `;
                        document.querySelector('#level4').innerHTML = ` Unit:${levelunit} `;
                        document.querySelector('#level5').innerHTML = ` Value:${levelvalue} `;
                
                    
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        
                return false;
                }
                else{
                    document.querySelector('#level').innerHTML = ` ERROR `;
                        
                }
                return false;
            }
        });