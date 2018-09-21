import {LinkArray} from "../trade-client";

function getDataModelId(dataObjectLinks: LinkArray) {
  let dataModelId: string = '';

  if (dataObjectLinks) {
    for (let link of dataObjectLinks) {
      if (link.rel === 'dataModel') {
        let urlParts = link.href.split('/');
        dataModelId = urlParts[urlParts.length - 1];
      }
    }
  }

  return dataModelId;
}

function getDataObjectId(dataElementLinks: LinkArray) {
  let dataObjectId: string = '';

  if (dataElementLinks) {
    for (let link of dataElementLinks) {
      if (link.rel === 'dataObject') {
        let urlParts = link.href.split('/');
        dataObjectId = urlParts[urlParts.length - 1];
      }
    }
  }

  return dataObjectId;
}

export {getDataModelId, getDataObjectId};
