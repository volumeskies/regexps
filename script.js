
            function hw()
            {
                var ptag = document.getElementsByTagName('p')[0];
                var str = ptag.textContent;
                
                console.log(str);
                
                var obj={};
                    obj.Tag=0;
                    obj.Text=0;
                    obj.Count=0;
                
                console.log(obj);
                console.log(str);
                
                obj.Tag = str.match(/.*element:(\w*)\;/i)[1].toLowerCase();
                obj.Text = str.match(/.*text:([а-яё]*.*)\;\b/i)[1];
                obj.Count = +(str.match(/.*count:(-?\d*)\;/)[1]);
                
                console.log(obj);
                
                document.body.removeChild(ptag);
            
                if(obj.Tag == "" || obj.Text == "")
                {
                    console.log("ERROR! there is no tag or text!\n");return;
                }
                if(obj.Count <= 0) 
                {
                    console.log("ERROR! count is negative or zero!\n");return;
                }

                var newElem = document.createElement(obj.Tag);
                var textnewElem = document.createTextNode(obj.Text);
                newElem.appendChild(textnewElem);
                document.body.appendChild(newElem);

                for(var i = 1; i < obj.Count; i++)
                {
                    console.log(i);
                    var clone = newElem.cloneNode(true);
			        document.body.appendChild(clone);
                }
            }