import style from '../List.module.scss';

export default function Item({assignment,time}: {assignment: string, time: string}) {    
    return(
        <li className={style.item}>
            <h3>{assignment}</h3>
            <span>{time}</span>
          </li>
    )
}