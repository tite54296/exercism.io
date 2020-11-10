function WordSearch (wordSearchGrid) {
    if (!wordSearchGrid) {
        throw new Error('Word search can not be initialized with an empty value.');
    }
    if (!wordSearchGrid[0][1]) {
        throw new Error('Word grid needs to be a matrix');
    }

    function searchInPosition(word, values, position) {
        let forward = false;
        let backwards = false;

        if (values.length - position >= word.length) {
            forward = true;
        }
        if (position >= word.length -1) {
            backwards = true;
        }
        // console.log(forward, backwards)
        if (!forward && !backwards) {
            return false
        }
        
        let found = false;
        let counter = 0;

        while(counter < word.length && !found) {
            if (forward) {
                const index = position + counter;
                if(values[position+counter] === word[counter]) {
                    const sliced = values.slice(index, index+word.length)
                    const foundWord= sliced.join('');
                    found = foundWord === word;
                }
            }
            if (backwards && !found) {
                const index = position - counter +1;
                if(values[position-counter] === word[counter]) {
                    const sliceReversed = values.slice(index-word.length,index).reverse();
                    const foundWord= sliceReversed.join('');
                    found = foundWord === word;
                }
            }
            counter++;
        }
        return found

    }

    function searchHorizontally(word, row, column) {
        const rowValues = wordSearchGrid[row];
        return searchInPosition(word, rowValues, column)

    }

    function searchVertically(word, row, column) {
        const columnValues = [];
        for (let i=0; i< wordSearchGrid.length/2; i++) {
            columnValues.push(wordSearchGrid[i][column]);
        }
        return searchInPosition(word, columnValues, row);
    }

    function searchDiagonally(word, row, column) {
        const diagonalValues = [];
        let rowCounter = row;
        let i = 0;
        while (i< wordSearchGrid[0].length-column && rowCounter < wordSearchGrid.length) {
            diagonalValues.push(wordSearchGrid[rowCounter][column + i]);
            i++;
            rowCounter++;
        }
        return searchInPosition(word, diagonalValues, column)
    }

    return function search(word) {
        let found = false
        let i = 0;
        // while(i < wordSearchGrid[0].length && !found) {
        //     let j=0;
        //     console.log(`Estoy en la columna ${i}`);
        //     while(j < wordSearchGrid.length && !found) {
        //         console.log(`Estoy en la fila ${j}`)
        //             found= searchVertically(word, j, i);
        //         j++;
        //         console.log(`Word found: ${found}`)
        //     }
        //     i++;
        // }
        i = 0;
        while (i < wordSearchGrid.length && !found) {
            let j= 0;
            while (j < wordSearchGrid[i].length && !found) {
                found= searchHorizontally(word, i, j);
                if (!found) {
                    found= searchVertically(word, j, i);
                }
                if (!found) {
                    found = searchDiagonally(word, i, j);
                } 
                j++;
            } 
            i++;
        }
        return found
    }
}

const grid = WordSearch(
    [
        ['F','F','G','C','K','A','T','H','E','R','I','N','E','R'],
        ["A","M","V","P","X","F","C","M","S","Y","A","V","M","E"], 
        ["T","L","K","T","P","D","A","Z","J","F","W","Y","U","D"], 
        ["S","C","H","E","T","E","S","C","O","Q","U","I","T","O"],
        ["U","Z","P","E","P","P","E","R","A","E","L","U","B","G"], 
        ["N","C","Y","Z","L","M","V","Q","A","M","A","J","N","S"], 
        ["S","A","U","Q","V","A","F","A","N","V","R","R","R","C"], 
        ["R","O","T","Y","R","G","N","N","V","U","E","S","I","V"],
        ["H","Y","R","S","N","B","L","D","W","Z","G","N","N","A"],
        ["S","Z","Q","F","U","M","L","R","B","V","Z","I","M","M"],
        ["Z","K","B","I","M","X","G","E","T","W","T","Q","W","A"],
        ["N","R","O","H","V","D","M","S","C","F","Y","T","N","E"],
        ["K","A","J","J","Q","E","T","Z","M","I","T","H","P","A"],
        ["O","L","L","Z","G","O","R","D","O","M","B","Z","G","Q"]
    ]);

console.log(grid('NATSU'));