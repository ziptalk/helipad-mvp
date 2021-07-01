import styled from "styled-components";
import React, { Component } from 'react';
import "./modal.css";

interface IModalProps {
    open?: any;
    close?: any;
    header?: any;
}

export class Modal extends Component<IModalProps> {
    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;

        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <button className="close" onClick={close}> &times; </button>
                        </header>
                        <main>
                            {this.props.children}
                        </main>
                        <footer>
                            <button className="close" onClick={close}> close </button>
                        </footer>
                    </section>
                ) : null }
            </div>
        )
    }
}

export default Modal;