/*
 * Copyright 2019 Olman Ureña
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const express = require('express');
const ordersData = require('../../data/orders.json');

const app = express();

app.get('/', async (req, res) => {
  console.log('Received orders request.');
  res.status(200).send(ordersData.orders);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Orders microservice is listening on port ${PORT}.`);
});
