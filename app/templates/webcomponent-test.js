import xtag from 'x-tag';
import './<%= filename %>';

describe('<%= camelizedName %> Component', function () {
    var component;

    beforeAll(function () {
        var fixture = "<<%= filename %> id='<%= camelizedName %>Component'></<%= filename %>>";
        document.body.insertAdjacentHTML('afterbegin', fixture);
        component = document.getElementById('<%= camelizedName %>Component');
    });

    it('should render without problems', function () {
        expect(component).toBeDefined();
    });
});