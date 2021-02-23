import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import MapGoogle from 'components/MapGoogle/MapGoogle';
import { useTranslation } from 'react-i18next';
import pvApi from 'api/pvApi';
import { toast } from 'react-toastify';
import StorageKeys from 'constants/storage-key';
import TableProject from 'components/TableProject/TableProject';
import useFetchProjectList from 'hooks/useFetchProjectList';
import { useSelector } from 'react-redux';


const ListProject = (props) => {

    const [t] = useTranslation();
    const notify = (type, message) => toast[type](`${message}`);
    const projectList = useFetchProjectList();
    const token = useSelector((state) => state.user.current.token);

    const handleClickProject = async (project) => {
        try {
            const uid = project.project_info.project_uid;
            const widgetArr = project.project_info.project_widgets;

            const accessWidgetList = widgetArr.filter((item) => item.request_type == 0);
            const listWidgetName = accessWidgetList.map((item) => item.name);

            const data = await pvApi.getDataByWidget(uid, token, listWidgetName.toString());
            console.log(data);
            
        } catch (error) {
            console.log(error);
            notify('error', error.message || 'Something went wrong');
        }
    };
    return (
        <Container fluid>
            <Row>
                <Col sm="12">
                    <h4>Danh sach du an</h4>
                </Col>
                <Col xl="7">
                    <TableProject handleClick={handleClickProject} projectList={projectList} />
                </Col>
                <Col xl="5">
                    <div style={{ height: '500px', width: '100%' }}>
                        <MapGoogle projectList={projectList} language="vi" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

ListProject.propTypes = {};

export default ListProject;
