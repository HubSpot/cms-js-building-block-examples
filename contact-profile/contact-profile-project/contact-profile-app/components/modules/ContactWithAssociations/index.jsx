import Grid from '../../Grid.jsx';
import Row from '../../Row.jsx';
import Column from '../../Column.jsx';
import ProfileImage from '../../ProfileImage.jsx';
import ProfileName from '../../ProfileName.jsx';
import Company from '../../Company.jsx';
import Layout from '../../Layout.jsx';

export const Component = (props) => {
  const contact = props.dataQueryResult.data.CRM.contact;

  const company =
    contact.associations.company_collection__primary.items.length &&
    contact.associations.company_collection__primary.items[0];

  return (
    <Layout>
      <Grid style={{ maxWidth: '75%' }}>
        <h1>{`Contact with Associations`}</h1>

        {contact.email ? (
          <Row>
            <Column style={{ flex: 2 }}>
              <ProfileImage firstName={contact.firstname} />
            </Column>
            <Column style={{ flex: 10 }}>
              <ProfileName
                firstName={contact.firstname}
                lastName={contact.lastname}
                city={contact.city}
                country={contact.country}
              />
            </Column>
          </Row>
        ) : (
          <span>Unable to find contact</span>
        )}

        {company && (
          <Row style={{ marginTop: '1rem' }}>
            <Column width="12">
              <Company name={company.name} description={company.description} />
            </Column>
          </Row>
        )}
      </Grid>
    </Layout>
  );
};
export { fields } from './fields.jsx';

export const meta = {
  label: `Contact With Associations Module`,
};

export const query = `
# $email: "{{ contact.email }}"
query ContactQuery($email: String! = "bh@hubspot.com") {
  CRM {
    contact(uniqueIdentifier: "email", uniqueIdentifierValue: $email) {
      firstname
      lastname
      email
      country
      city
      company
      associations {
        company_collection__primary {
          items {
            name
            description
          }
        }
      }
    }
  }
}
`;
