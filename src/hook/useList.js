import {useState} from 'react'

const useList = (init) => {
    const [list, setList] = useState(init)

    return {
        list,
        removeItem(item) {
            const filteredList = list.filter(v => v.name !== item);
            setList(filteredList);
        },
        setItem(index, newVal) {
            list[index].name = newVal;
            setList(list)
        }
    }

}


export default useList