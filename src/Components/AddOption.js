
import React from 'react'

export default class AdddOption extends React.Component {
  state = {
      error: undefined 
  }
    
    handleAddOption= (e) => {
        e.preventDefault()
        console.log('sdfasdfsf')
        const option = e.target.elements.optionnn.value.trim();
        const error = this.props.handleAddOOption(option)
        this.setState(()=>({error}))

        if (!error) {
            e.target.elements.optionnn.value = ''
        }

    }
    render () {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type = "text" name= "optionnn"/>
                    <button className="button">Add option</button>
                </form>
            </div>
        )
    }
}


