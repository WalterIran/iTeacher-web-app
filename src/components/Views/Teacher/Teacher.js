import { BaseButton, PrimaryButton, SecondaryButton } from '../../UI/Form/Button/Button';
import { PrimaryInput, SecondaryInput } from '../../UI/Form/Input/Input';
import { Icon } from '@iconify/react';


const Teacher = () => {

    const sampleContainer = {
        width: '20rem',
        margin: '4rem',
    }

  return (
    <div>
        <h2>Teacher Registration</h2>
        <div style={sampleContainer}>
            <h3>Primary Input</h3>
            <PrimaryInput
                label="First name"
                type="text"
                info="Este texto es de información"
                error="Este texto es de error"
            />
        </div>
        <div style={sampleContainer}>
            <h3>Secondary Input</h3>
            <SecondaryInput
                label="First name"
                type="text"
                info="Este texto es de información"
                error="Este texto es de error"
            />
        </div>
        <div style={sampleContainer}>
            <h3>Sample Buttons</h3>
            <BaseButton style={{backgroundColor: "#abc", fontWeight: 'bold'}}>
                Custom Black
            </BaseButton>
            <BaseButton style={{backgroundColor: "gray", fontWeight: 'bold'}}>
                <Icon icon='cil:save' />
                With Icon
            </BaseButton>
            <PrimaryButton>
                Primary
            </PrimaryButton>
            <SecondaryButton>
                Secondary
            </SecondaryButton>
        </div>
    </div>
  )
}

export default Teacher;