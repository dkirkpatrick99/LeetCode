function convert (s, numRows) {
    let rows = {}
    let str = s.split('');
    let i = 0;
    let zig = 0;
    let j = numRows - 2;
    let k = 0;
    let flag = false
    while (k <= str.length - 1) {
        
        filling = i % numRows;
        if (!rows[filling]) rows[filling] = []; 

        if (flag) {
            while(j > zig) {
                if(!str[k]) break
                for(let q = numRows - 1; q >= 0; q--) {
                    if(q != j) {
                        // rows[q].push(' ');
                      

                    } else {
                        rows[q].push(str[k]);
                        
                        k++
                        
                    }
                }
                j--
            }
            i--
            k--
            flag  = false;

        } else {

            rows[filling].push(str[k])
            
            if (filling === numRows - 1) {
                if(flag) {
                    flag = false
                } else {
                    flag = true
                }   
            }

        }

        j = numRows - 2
        k++
        i++
    }
    let sent = ""
    Object.values(rows).forEach((arr) => {
        sent += arr.join('')
    })
    return sent

};

// console.log(convert('PAYPALISHIRING', 5))