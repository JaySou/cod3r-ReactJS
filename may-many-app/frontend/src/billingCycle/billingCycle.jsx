import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'
import TabHeadr from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'
import { init, create, update, remove } from './billingCycleAction'


class BillingCycle extends Component {

    componentWillMount(){
        this.props.init()
    }

    render(){

        return(
            <div>
                <ContentHeader title='Ciclos de Pagamentos' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeadr label='Listar' icon='bars' target='tabList' />
                            <TabHeadr label='Incluir' icon='plus' target='tabCreate' />
                            <TabHeadr label='Alterar' icon='pencil' target='tabUpdate' />
                            <TabHeadr label='Excluir' icon='trash-o' target='tabDelete' />
                        </TabsHeader>

                        <TabsContent>
                            <TabContent id='tabList'> 
                                    <BillingCycleList />
                            </TabContent>

                            <TabContent id='tabCreate'>
                                    <BillingCycleForm onSubmit={this.props.create} submitClass='primary' submitLabel='Enviar'/>
                            </TabContent>

                            <TabContent id='tabUpdate'>
                                    <BillingCycleForm onSubmit={this.props.update} submitClass='info' submitLabel='Atualizar' />
                            </TabContent>
                            
                            <TabContent id='tabDelete'>
                                    <BillingCycleForm onSubmit={this.props.remove} readOnly={true} submitClass='danger' submitLabel='Excluir'/>
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

//const mapStateToProps = state => ({tab: state.tab})

const mapDispatchToProps = dispatch => bindActionCreators({create, update, remove, init}, dispatch)
export default connect(null , mapDispatchToProps)(BillingCycle)