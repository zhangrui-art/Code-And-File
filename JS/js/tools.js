            //创建可以执行简单动画的函数
            function move(obj,target,pos,speed,callBack){
                clearInterval(obj.timer)
                let current = parseInt(getComputedStyle(obj)[pos])
                if(current > target) speed=-speed
                obj.timer = setInterval(() => {
                    let oldValue = parseInt(getComputedStyle(obj)[pos])
                    let newValue = oldValue + speed
                    if((speed<0 && newValue<target)||(speed>0 && newValue>target)) newValue=target
                    obj.style[pos] = newValue+"px"
                    if(newValue==target) {
                        clearInterval(obj.timer)
                        callBack && callBack()
                    }
                }, 30);
            }