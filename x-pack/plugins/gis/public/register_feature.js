/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import {
  FeatureCatalogueRegistryProvider,
  FeatureCatalogueCategory
} from 'ui/registry/feature_catalogue';


FeatureCatalogueRegistryProvider.register(() => {
  return {
    id: 'gis',
    title: 'GIS',
    description: 'Map and analyze the geo-data from Elasticsearch and the Elastic Maps Service',
    icon: 'wrench', //no gis logo yet
    path: '/app/gis',
    showOnHomePage: true,
    category: FeatureCatalogueCategory.OTHER
  };
});

