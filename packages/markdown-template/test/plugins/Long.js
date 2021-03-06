/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

const chai = require('chai');
chai.use(require('chai-string'));

chai.should();
chai.use(require('chai-things'));
chai.use(require('chai-as-promised'));

// Basic parser constructors
const Long = require('../../lib/plugins/Long');

describe('#Long', () => {
    describe('#parse', () => {
        it('should parse long', async () => {
            Long.javascript.parse()().parse('123').status.should.equal(true);
        });
        it('should not parse long', async () => {
            Long.javascript.parse()().parse('123.313e-33').status.should.equal(false);
        });
    });
});
