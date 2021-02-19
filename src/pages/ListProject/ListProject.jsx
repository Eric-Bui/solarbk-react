import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import MapGoogle from 'components/MapGoogle/MapGoogle';
import { useTranslation } from 'react-i18next';
import pvApi from 'api/pvApi';
import StorageKeys from 'constants/storage-key';
import TableProject from 'components/TableProject/TableProject';
import useFetchProjectList from 'hooks/useFetchProjectList';

ListProject.propTypes = {};

function ListProject(props) {
    const [language, setLanguage] = useState('en');
    const [t] = useTranslation();
   const projectList = useFetchProjectList();
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <h4>Danh sach du an</h4>
                </Col>
                <Col xl="7">
                <TableProject projectList={projectList}/>
                </Col>
                <Col xl="5">
                    <div style={{ height: '500px', width: '100%' }}>
                        <MapGoogle projectList={projectList} language={language}/>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ListProject;
