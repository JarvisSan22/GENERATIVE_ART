
        function CreateImage(){
            //const canvas = document.createElement('canvas');
            const canvas= document.getElementById("board");
            var r_level=document.getElementById("r_level")
            //サイズを決める
            
            const context = canvas.getContext('2d');
            
            //円を描く
            
        
            const render =(x,y,r,level)=> {
                if (level <=0) return;
                //円を描く
                context.beginPath();
                context.arc(x,y,r,0,Math.PI*2);
                context.strokeStyle = 'rgba(255, 255, 255, 0.1)';
                context.stroke();
                //複数の円を描く
                r /= 2;
                for (let i=0; i<2 ; i++) {
                    let v=i/2 * Math.PI *2 ;
                    for (let a =0,aa=8; a<aa; a++){
                        let av = a * Math.PI /aa;
                        let nx = x + Math.sin(v + av) *r ;
                        let ny = y +Math.cos(v+ av)*r;
        
                        //再起 recursive
                        render(nx,ny,r,level-1);
                    }
        
                }
            };
            render(canvas.width/2,canvas.height/2,canvas.height*0.4,r_level)
        
        };
        