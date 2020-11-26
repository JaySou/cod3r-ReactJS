import './App.css';

import React from 'react';

import Mega from './mega/Mega'
import Contador from './contador/Contador'
import Input from './formulario/Input'
import IndiretaPai from './comunicacao/IndiretaPai.jsx'
import Direta from './comunicacao/Direta'
import ListaAlunos from './repeticao/ListaAlunos'
import FamiliaMembro from './basico/FamiliaMembro'
import Familia from './basico/Familia'
import Card from './layouts/Card'
import Aleatorio from './basico/Aleatorio'
import Fragmentos from './basico/Fragmentos'
import ComParametros from './basico/ComParametros'
import Primeiro from './basico/Primeiro'

export default _ => (
    <div className="App">
        <h1> Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#11 - Componente Mega" color="#99B4DC">
                <Mega qtde={6}></Mega>
            </Card>           

            <Card titulo="#10 - Componente Contador" color="#7D78BE">
                <Contador numeroInicial={10}></Contador>
            </Card>           

            <Card titulo="#9 - Componente controlado (Input)" color="#B0BF20">
                <Input></Input>
            </Card>           

            <Card titulo="#8 - Comunicação Indireta" color="#9A5A4F">
                <IndiretaPai></IndiretaPai>
            </Card>           

            <Card titulo="#7 - Comunicação Direta" color="#FF4C65">
                <Direta></Direta>
            </Card>           

            <Card titulo="#6 - Componente Lista Alunos" color="#FF4C65">
                <ListaAlunos ></ListaAlunos>
            </Card>           
            
            <Card titulo="#5 - Componente Familia" color="#00C8F8">
                <Familia sobrenome="ferreira">
                    <FamiliaMembro nome="Pedro"  />
                    <FamiliaMembro nome="Ana"  />
                    <FamiliaMembro nome="Gustavo"  />
                </Familia>
            </Card>

            <Card titulo="#4 - Desafio Aleatorio" color="#FA6900">
                <Aleatorio min={10} max={20} />
            </Card>

            <Card titulo="#3 - Fragmentos" color="#E94C6F">
                <Fragmentos />
            </Card>

            <Card titulo="#2 - Com Parametros" color="#E8B71A">
                <ComParametros
                    titulo="Situacao"
                    aluno="Pedro Silva"
                    nota={9.3}
                />
            </Card>

            <Card titulo="#1 - Primeiro Componente" color="#588C73">
                <Primeiro> </Primeiro>
            </Card>

        </div>

    </div>
);