import React from 'react'
import {expect} from 'chai'
import Enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {spy} from 'sinon'

const adapter = new Adapter()
Enzyme.configure({adapter})

import Main from './main'

describe('<Main /> component', () => {
  let main

  beforeEach('Create component', () => {
    main = shallow(<Main />)
  })

  it('has a `gender` field initialized to be an empty array', () => {
    expect(main.state().gender).to.be.an('array')
  })

  it('has a `allData` field initialized to be an empty array', () => {
    expect(main.state().allData).to.be.an('array')
  })

  it('has a `pclass` field initialized to be an empty array', () => {
    expect(main.state().pclass).to.be.an('array')
  })

  it('has a `selectedData` field initialized to be an empty array', () => {
    expect(main.state().selectedData).to.be.an('array')
  })

  //
  // has methods
  //

  it('has a method called `selectData`, which takes an array of Id and sets the matching data to the `gender`, `pclass` and `selectedData` on state', () => {
    const allDatas = [
      {
        Sex: 'female',
        id: 1,
        Name: 'Jenna'
      },
      {
        Sex: 'male',
        id: 2,
        Name: 'James'
      },
      {
        Sex: 'female',
        id: 3,
        Name: 'Gilda'
      }
    ]
    const genders = [
      {
        Sex: 'female',
        id: 1
      },
      {
        Sex: 'male',
        id: 2
      },
      {
        Sex: 'female',
        id: 3
      }
    ]
    const pclasses = [
      {
        Pclass: 1,
        id: 1
      },
      {
        Pclass: 3,
        id: 2
      },
      {
        Pclass: 3,
        id: 3
      }
    ]
    main.setState({allData: allDatas, gender: genders, pclass: pclasses})
    const passenger = [
      {
        Sex: 'female',
        id: 1
      },
      {
        Sex: 'male',
        id: 2
      }
    ]
    const passengerPclass = [
      {
        Pclass: 1,
        id: 1
      },
      {
        Pclass: 3,
        id: 2
      }
    ]

    const selected = [
      {
        Sex: 'female',
        id: 1,
        Name: 'Jenna'
      },
      {
        Sex: 'male',
        id: 2,
        Name: 'James'
      }
    ]

    const id = [1, 2]

    expect(main.instance().selectData).to.be.a('function')

    main.instance().selectData(id)
    expect(main.state().gender).to.be.deep.equal(passenger)
    main.instance().selectData(id)
    expect(main.state().pclass).to.be.deep.equal(passengerPclass)
    main.instance().selectData(id)
    expect(main.state().selectedData).to.be.deep.equal(selected)
  })

  it('binds the `selectData` method to the context of the component', () => {
    expect(
      main.instance().selectData.hasOwnProperty('prototype')
    ).to.be.deep.equal(false)
  })
})
