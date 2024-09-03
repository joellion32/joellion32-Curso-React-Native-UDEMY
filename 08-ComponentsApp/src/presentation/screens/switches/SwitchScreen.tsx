import React, { useState } from 'react'
import { CustomView } from '../../components/ui/CustomView'
import { Card } from '../../components/ui/Card'
import { CustomSwitch } from '../../components/ui/CustomSwitch'
import { Separator } from '../../components/ui/Separator'

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true
    })
    return (
        <CustomView>
            <Card style={{ marginTop: 100, paddingHorizontal: 10 }}>
                <CustomSwitch isOn={state.isActive} onChange={value => setState({ ...state, isActive: value })} text='¿Esta activo?' />
                <Separator />
                <CustomSwitch isOn={state.isHungry} onChange={value => setState({ ...state, isHungry: value })} text='¿Tiene Hambre?' />
                <Separator />
                <CustomSwitch isOn={state.isHappy} onChange={value => setState({ ...state, isHappy: value })} text='¿Esta Felíz?' />
            </Card>
        </CustomView>
    )
}

