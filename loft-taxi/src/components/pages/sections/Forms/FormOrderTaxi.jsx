import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { getRoute } from '../../../../actions';

export default function FormOrderTaxi({useDispatchHook = useDispatch, disableValidation = false}) {
    const dispatch = useDispatchHook();
    const props = {}
    props.addresses = useSelector(store => store.map.addresses);
    const [address1_value, set_address1_value] = useState("");
    const [address2_value, set_address2_value] = useState("");
    let formSchema = {};

    if(!disableValidation) {
        formSchema = yup.object().shape({
            address1_value: yup.string().required('Обязательное поле'),
            address2_value: yup.string().required('Обязательное поле')
        })
    } else {
        formSchema = yup.object().shape({
            address1_value: yup.string(),
            address2_value: yup.string()
        })
    }

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(formSchema)
    });
    
    const handleValueChange = (event, index) => {
        event.persist();
        const { textContent } = event.target;
        console.log(textContent, index)
        switch (index) {
            case 0:
                set_address1_value(textContent)
                break;
            case 1:
                set_address2_value(textContent)
                break;
            default:
                return;
        }
    }

    const filterInputs = (index) => {
        switch (index) {
            case 0:
                return props.addresses.filter((e) => {
                    return e !== address2_value && e.toLowerCase().indexOf(address1_value.toLowerCase()) > -1;
                })
            case 1:
                return props.addresses.filter((e) => {
                    return e !== address1_value && e.toLowerCase().indexOf(address2_value.toLowerCase()) > -1;
                })
            default:
                return;
        }
    }

    const convertArrayToObject = (array, key) => {
        return array.reduce(function(result, item, index) {
            result.push({[key]: item});
            return result;
        }, [])
    };

    const onSubmit = ({address1_value, address2_value}) => {
        dispatch(getRoute(address1_value, address2_value))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="start_taxi" data-testid="FormOrderTaxi">
            <div className="search_adress">
                <Autocomplete
                    id="combo-box-demo"
                    className="search_adress_input"
                    options={convertArrayToObject(filterInputs(0), "title")}
                    placeholder="Откуда"
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option, value) => option.title === value.title}
                    style={{ width: `${100}%` }}
                    onChange={(e) => handleValueChange(e, 0)}
                    renderInput={(params) => <TextField {...params} name="address1_value" label="Откуда" variant="outlined" error={!!errors.address1_value}
                    helperText={ errors.address1_value && errors.address1_value.message} inputRef={register} value={address1_value}/>}
                />
            </div>
            <div className="otsp_40px"></div>
            <div className="search_adress">
                <Autocomplete
                    id="combo-box-demo"                    
                    className="search_adress_input"
                    options={convertArrayToObject(filterInputs(1), "title")}
                    placeholder="Куда"
                    getOptionLabel={(option) => option.title}
                    getOptionSelected={(option, value) => option.title === value.title}
                    style={{ width: `${100}%` }}
                    onChange={(e) => handleValueChange(e, 1)}
                    renderInput={(params) => <TextField {...params} name="address2_value" label="Куда" variant="outlined" error={!!errors.address2_value}
                    helperText={ errors.address2_value && errors.address2_value.message} inputRef={register} value={address2_value}/>}
                />
            </div>
            <button type="submit" className="box_btn_taxxxi btn_taxi_yellow heigh_taxi_oder" data-testid="ordertaxi-submit">
                <div>Вызвать такси</div>    
            </button>
        </form>
    )
}