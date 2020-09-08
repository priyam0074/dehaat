export interface IPersonProps {
    name: string;
    mobileNo: number;
    address: string;
  }


export class Person {

    private props: IPersonProps;

    getName() {
        return this.props.name;
    }
    getMobileNo() {
        return this.props.mobileNo;
    }
    getAddress() {
        return this.props.address;
    }

    setName(name) {
      this.props.name = name;
    }

    setMobileNo(mobileNo) {
        this.props.mobileNo = mobileNo;
      }

    setAddress(address) {
        this.props.address = address;
      }
}